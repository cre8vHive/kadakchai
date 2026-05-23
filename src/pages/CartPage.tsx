import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatMoney } from "../lib/format";
import { useDocumentTitle } from "../lib/meta";
import { getRazorpayKeyId, openRazorpayCheckout } from "../lib/razorpay";
import { QuantityControl } from "../components/StoreUi";

export default function CartPage() {
  const { clearCart, items, subtotal, updateQuantity, removeItem } = useCart();
  const [checkoutError, setCheckoutError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  const hasRazorpayKey = Boolean(getRazorpayKeyId());

  useDocumentTitle("Cart");

  async function handleCheckout() {
    setCheckoutError("");
    setPaymentId("");
    setIsCheckingOut(true);

    try {
      await openRazorpayCheckout({
        amount: subtotal,
        description: `${items.length} item${items.length === 1 ? "" : "s"} from your cart`,
        items: items.map((item) => ({
          name: item.product.title,
          quantity: item.quantity,
          variant: item.variant.label,
        })),
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
                      <p className="text-subdued">{item.variant.label}</p>
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
        </section>

        <aside className="cart-summary">
          <div className="cart-summary__row">
            <span>Subtotal</span>
            <strong>{formatMoney(subtotal)}</strong>
          </div>
          <p className="muted-copy">
            This is a client-only Razorpay Checkout. Add a backend later for order creation and
            signature verification before treating payments as fulfilled.
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
            {isCheckingOut ? "Opening Razorpay..." : "Pay with Razorpay"}
          </button>
        </aside>
      </div>
    </div>
  );
}
