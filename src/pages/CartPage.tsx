import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/useCart";
import { formatMoney, formatVariantSizeLabel } from "../lib/format";
import { useDocumentTitle } from "../lib/meta";
import { getRazorpayKeyId, openRazorpayCheckout } from "../lib/razorpay";
import { QuantityControl } from "../components/StoreUi";

export default function CartPage() {
  const { clearCart, items, subtotal, updateQuantity, removeItem } = useCart();
  const [checkoutError, setCheckoutError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  
  // Delivery Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const hasRazorpayKey = Boolean(getRazorpayKeyId());

  useDocumentTitle("Cart");

  async function handleCheckout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setCheckoutError("");
    setPaymentId("");
    setIsCheckingOut(true);

    if (!name || !email || !phone || !address) {
      setCheckoutError("Please fill out all delivery details.");
      setIsCheckingOut(false);
      return;
    }

    try {
      // 1. Create Order via PHP Backend
      const response = await fetch("/api/create-order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: subtotal }),
      });

      const data = await response.json();

      if (!response.ok || !data.id) {
        throw new Error(data.error || "Failed to create order from server.");
      }

      // 2. Open Razorpay Checkout Modal
      await openRazorpayCheckout({
        amount: subtotal,
        description: `${items.length} item${items.length === 1 ? "" : "s"} from your cart`,
        items: items.map((item) => ({
          name: item.product.title,
          quantity: item.quantity,
          variant: formatVariantSizeLabel(item.variant.cartLabel ?? item.variant.label),
        })),
        orderId: data.id,
        prefill: { name, email, contact: phone },
        deliveryAddress: address,
        onDismiss: () => setIsCheckingOut(false),
        onError: (message) => {
          setCheckoutError(message);
          setIsCheckingOut(false);
        },
        onSuccess: (razorpayPaymentId) => {
          setPaymentId(razorpayPaymentId);
          setIsCheckingOut(false);
          clearCart();
        },
      });
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : "Payment could not be started.");
      setIsCheckingOut(false);
    }
  }

  return (
    <div className="page-section">
      <div className="cart-page">
        <section className="cart-page__panel">
          <div className="prose" style={{ marginBottom: "24px" }}>
            <h1 className="h2">Cart</h1>
            <p>
              Review your cart and pay securely through Razorpay Checkout.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="empty-state-card">
              <p className="h5">Your cart is empty</p>
              <p className="muted-copy">Start with the bestseller collection to test the local flow.</p>
              <Link to="/collections/best-sellers" className="button button--xl">
                Browse Best Sellers
              </Link>
            </div>
          ) : (
            <div className="cart-lines">
              {items.map((item) => (
                <article key={item.key} className="cart-line">
                  <img src={item.product.image} alt={item.product.title} />
                  <div className="cart-line__meta">
                    <div>
                      <p className="bold">{item.product.title}</p>
                      <p className="text-subdued">{item.variant.cartLabel ?? item.variant.label}</p>
                    </div>
                    <p className="bold">{formatMoney(item.variant.price)}</p>
                    <QuantityControl
                      label={item.product.title}
                      quantity={item.quantity}
                      onChange={(quantity) => updateQuantity(item.key, quantity)}
                    />
                    <button
                      type="button"
                      className="button button--outline button--sm"
                      onClick={() => removeItem(item.key)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <div className="delivery-form" style={{ marginTop: "32px", padding: "24px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
              <h2 className="h4" style={{ marginBottom: "16px" }}>Delivery Details</h2>
              <div style={{ display: "grid", gap: "16px" }}>
                <div>
                  <label htmlFor="name" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Full Name</label>
                  <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Email Address</label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="john@example.com" required />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Phone Number</label>
                  <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="+91 9876543210" required />
                </div>
                <div>
                  <label htmlFor="address" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Full Delivery Address</label>
                  <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc", minHeight: "80px" }} placeholder="123 Street Name, City, State, ZIP" required />
                </div>
              </div>
            </div>
          )}
        </section>

        <aside className="cart-summary">
          <div className="cart-summary__row">
            <span>Subtotal</span>
            <strong>{formatMoney(subtotal)}</strong>
          </div>
          <p className="muted-copy">
          </p>
          {paymentId ? (
            <div className="payment-status payment-status--success">
              Payment started successfully. Razorpay payment ID: {paymentId}
            </div>
          ) : null}
          {checkoutError ? (
            <div className="payment-status payment-status--error">{checkoutError}</div>
          ) : null}
          {!hasRazorpayKey ? (
            <div className="payment-status payment-status--error">
              Add VITE_RAZORPAY_KEY_ID to enable checkout.
            </div>
          ) : null}
          <button
            type="button"
            className="button button--xl"
            disabled={items.length === 0 || isCheckingOut || !hasRazorpayKey}
            onClick={handleCheckout}
          >
            {isCheckingOut ? "Processing..." : "Pay Securely"}
          </button>
        </aside>
      </div>
    </div>
  );
}
