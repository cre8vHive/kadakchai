import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatMoney } from "../lib/format";
import { useDocumentTitle } from "../lib/meta";
import { QuantityControl } from "../components/StoreUi";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  useDocumentTitle("Cart");

  return (
    <div className="page-section">
      <div className="cart-page">
        <section className="cart-page__panel">
          <div className="prose" style={{ marginBottom: "24px" }}>
            <h1 className="h2">Cart</h1>
            <p>
              Fully local cart UI with quantity changes, totals, and persistence. Checkout remains
              disabled until you wire your own API.
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
            Taxes, shipping, and payment remain intentionally static until your APIs are added.
          </p>
          <button type="button" className="button button--xl" disabled>
            Checkout Coming Soon
          </button>
        </aside>
      </div>
    </div>
  );
}
