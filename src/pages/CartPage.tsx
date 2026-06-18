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
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateStr, setStateStr] = useState("");
  const [pincode, setPincode] = useState("");

  const [completedOrderId, setCompletedOrderId] = useState("");

  const hasRazorpayKey = Boolean(getRazorpayKeyId());

  useDocumentTitle("Cart");

  async function handleCheckout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setCheckoutError("");
    setPaymentId("");
    setIsCheckingOut(true);

    const fullAddress = `${addressLine1}, ${addressLine2 ? addressLine2 + ', ' : ''}${city}, ${stateStr} - ${pincode}`;

    if (!name || !email || !phone || !addressLine1 || !city || !stateStr || !pincode) {
      setCheckoutError("Please fill out all required delivery details.");
      setIsCheckingOut(false);
      return;
    }

    try {
      // 1. Create Order via PHP Backend
      const response = await fetch("/api/create-order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          amount: subtotal,
          notes: {
            delivery_address: fullAddress.slice(0, 255),
            customer_name: name.slice(0, 255),
            phone: phone.slice(0, 255)
          }
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.id) {
        const errorMessage = data.error?.description || data.error?.message || (typeof data.error === 'string' ? data.error : "Failed to create order from server.");
        throw new Error(errorMessage);
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
        deliveryAddress: fullAddress,
        onDismiss: () => setIsCheckingOut(false),
        onError: (message) => {
          setCheckoutError(message);
          setIsCheckingOut(false);
        },
        onSuccess: (razorpayPaymentId) => {
          setPaymentId(razorpayPaymentId);
          setCompletedOrderId(data.id);
          setIsCheckingOut(false);
          clearCart();
        },
      });
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : "Payment could not be started.");
      setIsCheckingOut(false);
    }
  }

  if (completedOrderId) {
    return (
      <div className="page-section">
        <div className="empty-state-card" style={{ maxWidth: "600px", margin: "0 auto", padding: "48px 24px", border: "1px solid #e5e7eb", borderRadius: "8px", textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
          <h1 className="h2" style={{ marginBottom: "16px" }}>Payment Successful!</h1>
          <p className="muted-copy" style={{ marginBottom: "8px" }}>Thank you for your order.</p>
          <p className="muted-copy" style={{ marginBottom: "24px" }}>
            Your Order ID is: <strong style={{ color: "#000" }}>{completedOrderId}</strong>
          </p>
          <Link to="/" className="button button--xl">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
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
                  <label htmlFor="name" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Full Name*</label>
                  <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Email Address*</label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="john@example.com" required />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Phone Number*</label>
                  <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="+91 9876543210" required />
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", marginTop: "8px" }}>
                  <div>
                    <label htmlFor="addressLine1" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Address Line 1*</label>
                    <input id="addressLine1" type="text" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="Flat / House No. / Building" required />
                  </div>
                  <div>
                    <label htmlFor="addressLine2" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Address Line 2 (Optional)</label>
                    <input id="addressLine2" type="text" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} placeholder="Street / Area / Landmark" />
                  </div>
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
                  <div>
                    <label htmlFor="city" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>City*</label>
                    <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} required />
                  </div>
                  <div>
                    <label htmlFor="state" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>State*</label>
                    <input id="state" type="text" value={stateStr} onChange={(e) => setStateStr(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} required />
                  </div>
                  <div>
                    <label htmlFor="pincode" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Pincode*</label>
                    <input id="pincode" type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} required />
                  </div>
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
