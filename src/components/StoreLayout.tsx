import { startTransition, useDeferredValue, useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { collections, searchStore, siteSettings } from "../data/store";
import { useCart } from "../context/CartContext";
import { formatMoney } from "../lib/format";
import { QuantityControl } from "./StoreUi";

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.9565 39.9002C26.0073 39.9002 26.0563 39.8926 26.1025 39.8785C35.6603 39.8011 43.413 32.1339 43.413 22.6896C43.413 13.1972 35.5812 5.5 25.9565 5.5C16.3318 5.5 8.5 13.1972 8.5 22.6896C8.5 32.1811 16.331 39.9002 25.9565 39.9002ZM10.7204 22.6896C10.7204 14.4387 17.5542 7.70114 25.9565 7.70114C34.382 7.70114 41.2355 14.4194 41.2355 22.6896C41.2355 30.9615 34.4016 37.6991 25.9779 37.6991C17.5546 37.6991 10.7204 30.9409 10.7204 22.6896Z"
        fill="#AB8744"
        stroke="#AB8744"
        strokeLinejoin="round"
      />
      <path
        d="M46.4745 50.1163L46.4758 50.1178C46.7105 50.3872 47.0261 50.5001 47.3239 50.5001C47.5413 50.5001 47.8217 50.4328 48.0431 50.2252C48.5147 49.8229 48.5324 49.1322 48.1551 48.6866L48.1519 48.6828L36.3565 35.0293C35.952 34.554 35.2539 34.5352 34.8033 34.9048C34.3154 35.3049 34.2929 36.0066 34.6745 36.4574L34.6778 36.4612L46.4745 50.1163Z"
        fill="#AB8744"
        stroke="#AB8744"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M39.7305 16.4407C39.7305 22.4406 34.8968 27.3228 28.9154 27.4013C28.8691 27.4155 28.8199 27.4231 28.7689 27.4231C22.7201 27.4231 17.8073 22.5103 17.8073 16.4616C17.8073 10.4128 22.7201 5.5 28.7689 5.5C34.8164 5.5 39.7305 10.3907 39.7305 16.4407ZM37.5426 16.4616C37.5426 11.6119 33.5992 7.68787 28.7689 7.68787C23.9393 7.68787 19.9952 11.632 19.9952 16.4616C19.9952 21.2912 23.9393 25.2353 28.7689 25.2353C33.5992 25.2353 37.5426 21.3113 37.5426 16.4616Z"
        fill="#AB8744"
        stroke="#AB8744"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 40.0891C13.5 32.0415 20.3548 25.5287 28.7364 25.4999H28.7923C37.1838 25.5287 44.0386 32.0415 44.0386 40.0891V49.3873C44.0386 50.0474 43.4809 50.4998 42.8954 50.4998H42.2523C41.9761 50.4998 41.7523 50.276 41.7523 49.9998V40.0673C41.7523 33.2776 35.9584 27.7249 28.7693 27.7249C21.5802 27.7249 15.7863 33.2776 15.7863 40.0673V49.9998C15.7863 50.276 15.5624 50.4998 15.2863 50.4998H14.6431C14.0109 50.4998 13.5 50.0028 13.5 49.3873V40.0891Z"
        fill="#AB8744"
        stroke="#AB8744"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.7172 50.5001H45.1162C45.3985 50.5001 45.6796 50.4202 45.9035 50.2651C46.1265 50.1107 46.3333 49.8468 46.3333 49.4932V21.1736C46.3333 20.8346 46.1478 20.5683 45.9179 20.405C45.6912 20.2441 45.4061 20.1667 45.1162 20.1667H11.7172C11.4349 20.1667 11.1537 20.2466 10.9298 20.4017C10.7069 20.5561 10.5 20.8201 10.5 21.1736V49.4932C10.5 49.8322 10.6855 50.0985 10.9155 50.2618C11.1422 50.4227 11.4272 50.5001 11.7172 50.5001ZM43.399 48.4643H12.9599V22.6805C12.9599 22.4044 13.1838 22.1805 13.4599 22.1805H43.399C43.6752 22.1805 43.899 22.4044 43.899 22.6805V47.9643C43.899 48.2404 43.6752 48.4643 43.399 48.4643Z"
        fill="#AB8744"
        stroke="#AB8744"
        strokeLinejoin="round"
      />
      <path
        d="M38.3408 24.5C38.4092 24.5 38.4744 24.4863 38.5337 24.4614C39.0523 24.3746 39.5 23.944 39.5 23.3483V16.0225C39.5 10.1966 34.5454 5.5 28.5 5.5C22.4538 5.5 17.5 10.1973 17.5 16.0449V23.3708C17.5 24.0057 18.0521 24.5 18.6592 24.5C19.2543 24.5 19.8184 24.0394 19.8184 23.3708V16.0449C19.8184 11.5113 23.6923 7.7809 28.5 7.7809C33.3077 7.7809 37.1816 11.5113 37.1816 16.0449V23.3708C37.1816 23.9942 37.6983 24.5 38.3408 24.5Z"
        fill="#AB8744"
        stroke="#AB8744"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function StoreLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const deferredQuery = useDeferredValue(searchQuery);
  const searchResults = deferredQuery.trim() ? searchStore(deferredQuery) : null;
  const location = useLocation();
  const navigate = useNavigate();
  const {
    closeCart,
    isOpen,
    itemCount,
    items,
    openCart,
    subtotal,
    updateQuantity,
    removeItem,
  } = useCart();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsNavOpen(false);
  }, [location.pathname, location.search]);

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = searchQuery.trim();

    startTransition(() => {
      navigate(trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : "/search");
    });
  }
  return (
    <div className="app-shell">
      <section className="shopify-section shopify-section-group-header-group shopify-section--scrolling-text">
        <div
          className="section section--tight section-full text-custom"
          style={{ backgroundColor: "#004a2b", color: "#fff" }}
        >
          <div className="announcement-strip">
            <div className="announcement-strip__track">
              {siteSettings.announcementItems.map((item) => (
                <span key={item} className="scrolling-text__text heading">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <header className="shopify-section shopify-section-group-header-group shopify-section--header app-header">
        <div className="header header__wrapper">
          <div className="header__main-nav">
            <button
              type="button"
              className="header-mobile-toggle"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className={`header-menu-toggle ${isNavOpen ? "is-open" : ""}`}
              onClick={() => setIsNavOpen((open) => !open)}
              aria-expanded={isNavOpen}
              aria-controls="header-menu-panel"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <h1 className="header__logo">
            <Link to="/">
              <span className="sr-only">{siteSettings.brandName}</span>
              <img src={siteSettings.logo} alt="" className="header__logo-image" />
            </Link>
          </h1>

          <div className="header__secondary-nav">
            <button
              type="button"
              className="header-icon-button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <SearchIcon />
            </button>

            <Link to="/account/login" className="header-icon-button" aria-label="Open account page">
              <AccountIcon />
            </Link>

            <button
              type="button"
              className="header-icon-button"
              onClick={openCart}
              aria-label="Open cart"
            >
              <CartIcon />
              <div className="header__cart-count">
                <span className={`count-bubble ${itemCount > 0 ? "" : "opacity-0"}`}>{itemCount}</span>
              </div>
            </button>
          </div>

          <div
            id="header-menu-panel"
            className={`header-menu-panel ${isNavOpen ? "is-open" : ""}`}
          >
            <nav className="header-menu" aria-label="Primary navigation">
              {siteSettings.primaryNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="category-nav">
        <div className="category-nav__wrapper">
          {collections.slice(0, 6).map((collection) => (
            <Link key={collection.slug} to={`/collections/${collection.slug}`} className="category-card">
              <div className="category-card__image-wrapper">
                <img src={collection.heroImage} alt={collection.title} className="category-card__image" />
              </div>
              <p className="category-card__label">{collection.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <main role="main" id="main" className="anchor">
        <Outlet />
      </main>

      <footer className="shopify-section shopify-section-group-footer-group shopify-section--footer">
        <div className="footer">
          <div className="container">
            <div className="footer__wrapper">
              <div className="footer__block-list empty:hidden">
                <div className="footer__block footer__block--menu">
                  <p className="bold">Learn</p>
                  <ul className="v-stack gap-3" role="list">
                    {siteSettings.footerMenus.learn.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to} className="inline-block link-faded break-all">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer__block footer__block--menu">
                  <p className="bold">Shop</p>
                  <ul className="v-stack gap-3" role="list">
                    {siteSettings.footerMenus.shop.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to} className="inline-block link-faded break-all">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer__block footer__block--menu">
                  <p className="bold">Support</p>
                  <ul className="v-stack gap-3" role="list">
                    {siteSettings.footerMenus.support.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to} className="inline-block link-faded break-all">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer__block footer__block--menu">
                  <p className="bold">My Account</p>
                  <ul className="v-stack gap-3" role="list">
                    {siteSettings.footerMenus.account.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to} className="inline-block link-faded break-all">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer__block footer__block--newsletter">
                  <div className="v-stack gap-6">
                    <p className="h5">Sign-Up For Newsletter</p>
                    <form
                      className="footer__newsletter-form form"
                      onSubmit={(event) => event.preventDefault()}
                    >
                      <div className="form-control">
                        <input
                          id="footer-newsletter-email"
                          className="input is-floating"
                          type="email"
                          placeholder=" "
                        />
                        <label htmlFor="footer-newsletter-email" className="floating-label">
                          E-mail
                        </label>
                        <div className="self-submit-button">
                          <button type="submit" className="circle-chevron hover:colors">
                            <span className="sr-only">Subscribe</span>
                            <span className="animated-arrow" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="footer__aside empty:hidden">
                <div className="footer__aside-bottom copyright">
                  <p className="footer__copyright text-sm text-subdued">
                    <Link to="/pages/privacy-policy">Privacy Policy</Link>
                    <span className="link-divider"> | </span>
                    <Link to="/pages/terms-conditions">Terms & Conditions</Link>
                  </p>
                  <p className="footer-custom-p">{siteSettings.footerDisclaimer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="shopify-section shopify-section-group-footer-group shopify-section--social-icons-widget-list">
        <div className="section section-full text-custom" style={{ color: "#ab8744" }}>
          <div className="container">
            <div className="social-icons-widget-list">
              {siteSettings.socialLinks.map((socialLink) => (
                <a
                  key={socialLink.href}
                  href={socialLink.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={socialLink.label}
                >
                  <img
                    src={socialLink.icon}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={`drawer-shell ${isMenuOpen ? "is-open" : ""}`} aria-hidden={!isMenuOpen}>
        <button type="button" className="app-overlay" onClick={() => setIsMenuOpen(false)} />
        <aside className="mobile-drawer">
          <div className="drawer-head">
            <h2 className="h4">Browse</h2>
            <button
              type="button"
              className="icon-button--close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="mobile-nav-list">
            {siteSettings.primaryNav.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}

            <Link to="/search">Search</Link>
            <Link to="/account/login">Account</Link>
          </nav>
        </aside>
      </div>

      <div className={`drawer-shell ${isSearchOpen ? "is-open" : ""}`} aria-hidden={!isSearchOpen}>
        <button type="button" className="app-overlay" onClick={() => setIsSearchOpen(false)} />
        <aside className="drawer-panel">
          <div className="drawer-head">
            <p className="h4">Search</p>
            <button
              type="button"
              className="icon-button--close"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              <CloseIcon />
            </button>
          </div>

          <form className="v-stack gap-5 sm:gap-8" role="search" onSubmit={handleSearchSubmit}>
            <div className="search-input">
              <input
                type="search"
                name="q"
                placeholder="Search for..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
          </form>

          {!searchResults ? (
            <div className="v-stack">
              <div className="predictive-search__trending">
                <p className="search-drawer__heading">TRENDING SEARCHES</p>
                <ul className="v-stack gap-0" role="list">
                  {siteSettings.topSearches.map((term) => {
                    const collection = collections.find(
                      (candidate) =>
                        candidate.title.toLowerCase() === term.toLowerCase() ||
                        candidate.slug.replace("-", " ") === term.toLowerCase(),
                    );

                    const href = collection
                      ? `/collections/${collection.slug}`
                      : `/search?q=${encodeURIComponent(term)}`;

                    return (
                      <li key={term} className="search-trending-item">
                        <Link to={href} className="search-trending-link">
                          <span>{term}</span>
                          <span className="search-arrow" aria-hidden="true">
                            ↗
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="predictive-search__top-products">
                <p className="search-drawer__heading">TOP PRODUCTS</p>
                <div className="v-stack gap-0">
                  {searchStore("tea").products.slice(0, 4).map((product) => (
                    <Link
                      key={product.slug}
                      to={`/products/${product.slug}`}
                      className="search-product-item"
                    >
                      <img src={product.image} alt={product.title} />
                      <div className="search-product-info">
                        <span className="search-product-title">{product.title}</span>
                        <div className="div">
                          <div className={product.compareAtPrice ? "text-on-sale" : "text-subdued"}>
                            <span className="money">{formatMoney(product.price)}</span>
                          </div>
                          {product.compareAtPrice ? (
                            <div className="text-subdued line-through">
                              <span className="money">{formatMoney(product.compareAtPrice)}</span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="search-results-list">
              {searchResults.products.length > 0 ? (
                <div className="predictive-search__products">
                  <div className="predictive-search__products-header">
                    <p className="search-drawer__heading">TOP PRODUCTS</p>
                    <Link
                      to={`/search?q=${encodeURIComponent(searchQuery.trim())}`}
                      className="search-drawer__view-more"
                    >
                      View full results <span className="search-drawer__view-more-arrow">↗</span>
                    </Link>
                  </div>

                  <div className="predictive-search__products-grid">
                    {searchResults.products.slice(0, 6).map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}`}
                        className="search-product-item"
                      >
                        <img src={product.image} alt={product.title} />
                        <div className="search-product-info">
                          <span className="search-product-title">{product.title}</span>
                          <div className="div">
                            <div className={product.compareAtPrice ? "text-on-sale" : "text-subdued"}>
                              <span className="money">{formatMoney(product.price)}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="muted-copy">No matching products yet. Try a broader keyword.</p>
              )}
            </div>
          )}
        </aside>
      </div>

      <div className={`drawer-shell ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <button type="button" className="app-overlay" onClick={closeCart} />
        <aside className="drawer-panel">
          <div className="drawer-head">
            <p className="h4">Your Cart</p>
            <button
              type="button"
              className="icon-button--close"
              onClick={closeCart}
              aria-label="Close cart"
            >
              <CloseIcon />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="empty-state-card">
              <p className="h5">Your cart is empty</p>
              <p className="muted-copy">
                The UI is ready. Add products locally now and connect checkout APIs later.
              </p>
              <Link to="/collections/best-sellers" className="button button--xl">
                Browse Best Sellers
              </Link>
            </div>
          ) : (
            <div className="v-stack gap-6">
              <div className="cart-summary">
                <p className="bold">Free Shipping on purchase above ₹599</p>
                <p className="muted-copy">
                  {subtotal >= 599
                    ? "Your cart qualifies for the current free shipping banner."
                    : `Add ${formatMoney(599 - subtotal)} more to unlock free shipping.`}
                </p>
              </div>

              <div className="cart-lines">
                {items.map((item) => (
                  <article key={item.key} className="cart-line">
                    <img src={item.product.image} alt={item.product.title} />
                    <div className="cart-line__meta">
                      <div>
                        <p className="bold">{item.product.shortTitle ?? item.product.title}</p>
                        <p className="text-subdued">{item.variant.label}</p>
                      </div>
                      <div className="cart-line__bottom">
                      <p className="bold">{formatMoney(item.variant.price)}</p>

                      <div className="cart-line__actions">
                        <QuantityControl
                          label={item.product.title}
                          quantity={item.quantity}
                          onChange={(quantity) => updateQuantity(item.key, quantity)}
                        />

                        <button
                          type="button"
                          className="cart-remove-button"
                          onClick={() => removeItem(item.key)}
                          aria-label="Remove item"
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="cart-summary">
                <div className="cart-summary__row">
                  <span>Subtotal</span>
                  <strong>{formatMoney(subtotal)}</strong>
                </div>
                <p className="muted-copy">Use the cart page to complete Razorpay payment.</p>
                <Link to="/cart" className="button button--xl button--outline">
                  View Cart
                </Link>
                <Link to="/cart" className="button button--xl" onClick={closeCart}>
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
