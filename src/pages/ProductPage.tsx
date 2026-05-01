import { startTransition, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ProductCard, ProductGallery, Breadcrumbs, QuantityControl, RatingBadge } from "../components/StoreUi";
import { findProduct, getRelatedProducts } from "../data/store";
import { useCart } from "../context/CartContext";
import { formatMoney } from "../lib/format";
import { useDocumentTitle } from "../lib/meta";
import NotFoundPage from "./NotFoundPage";

export default function ProductPage() {
  const { slug = "" } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [quantity, setQuantity] = useState(1);
  const product = findProduct(slug);
  const { addItem } = useCart();

  useEffect(() => {
    setQuantity(1);
  }, [slug]);

  if (!product) {
    return <NotFoundPage />;
  }

  useDocumentTitle(product.title);

  const relatedProducts = getRelatedProducts(product);
  const selectedVariantId = searchParams.get("variant") ?? product.variantOptions[0]?.id ?? "";
  const selectedVariant =
    product.variantOptions.find((variant) => variant.id === selectedVariantId) ??
    product.variantOptions[0];

  function handleVariantChange(variantId: string) {
    const nextSearchParams = new URLSearchParams(searchParams);

    if (variantId === product.variantOptions[0]?.id) {
      nextSearchParams.delete("variant");
    } else {
      nextSearchParams.set("variant", variantId);
    }

    startTransition(() => {
      setSearchParams(nextSearchParams, { replace: true });
    });
  }

  return (
    <div className="page-section">
      <div className="v-stack gap-8">
        <Breadcrumbs
          links={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/collections/all" },
            { label: product.shortTitle ?? product.title, to: `/products/${product.slug}` },
          ]}
        />

        <section className="product-template">
          <ProductGallery product={product} />

          <div className="product-template__meta">
            <div className="prose">
              {product.badge ? <span className="badge badge--on-sale">{product.badge}</span> : null}
              <h1 className="h1">{product.title}</h1>
              {product.subtitle ? <p className="text-subdued">{product.subtitle}</p> : null}
            </div>

            <RatingBadge rating={product.rating} reviewCount={product.reviewCount} />

            <price-list className="price-list">
              <sale-price className={product.compareAtPrice ? "text-on-sale" : "text-subdued"}>
                <span className="money">{formatMoney(selectedVariant.price)}</span>
              </sale-price>

              {selectedVariant.compareAtPrice ? (
                <compare-at-price className="text-subdued line-through">
                  <span className="money">{formatMoney(selectedVariant.compareAtPrice)}</span>
                </compare-at-price>
              ) : null}
            </price-list>

            <div className="v-stack gap-3">
              <p className="bold">Pick Your Size</p>
              <div className="variant-pills">
                {product.variantOptions.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    className={`variant-pill ${variant.id === selectedVariant.id ? "is-active" : ""}`}
                    onClick={() => handleVariantChange(variant.id)}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-cta-row">
              <QuantityControl label="Quantity" quantity={quantity} onChange={setQuantity} />
              <button
                type="button"
                className="button button--xl add-to-cart-button"
                onClick={() => addItem(product, selectedVariant, quantity)}
              >
                Add to Cart
              </button>
            </div>

            {product.heroNote ? <p className="inline-note">{product.heroNote}</p> : null}

            <div className="rich-copy">
              {product.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="product-callouts">
          <article className="product-callout">
            <p className="subheading">Benefits</p>
            <ul className="v-stack gap-3">
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>

          <article className="product-callout">
            <p className="subheading">Ingredients</p>
            <ul className="v-stack gap-3">
              {product.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </article>

          <article className="product-callout">
            <p className="subheading">Collection Tags</p>
            <div className="benefit-list">
              {product.collectionSlugs.map((collectionSlug) => (
                <Link
                  key={collectionSlug}
                  to={`/collections/${collectionSlug}`}
                  className="variant-pill"
                >
                  {collectionSlug.replaceAll("-", " ")}
                </Link>
              ))}
            </div>
          </article>
        </section>

        <section className="jdgm-rev-widg" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="jdgm-rev-widg__header">
            <h2 className="jdgm-rev-widg__title">Customer Reviews</h2>
            <div className="jdgm-rev-widg__summary">
              <div
                className="jdgm-rev-widg__summary-stars"
                aria-label={`Average rating is ${product.rating.toFixed(2)} stars`}
                role="img"
              >
                {Array.from({ length: 5 }).map((_, index) => {
                  const difference = product.rating - index;
                  const state =
                    difference >= 1 ? "jdgm--on" : difference >= 0.5 ? "jdgm--half" : "jdgm--off";

                  return <span key={index} className={`jdgm-star ${state}`} />;
                })}
              </div>
              <div className="jdgm-rev-widg__summary-text">
                Based on {product.reviewCount} reviews
              </div>
            </div>
          </div>

          <div className="jdgm-rev-widg__body">
            <div className="jdgm-rev-widg__reviews">
              {product.reviews.slice(0, 3).map((review) => (
                <div key={`${review.author}-${review.body}`} className="jdgm-rev jdgm-divider-top">
                  <div className="jdgm-rev__header">
                    <div className="jdgm-rev__icon">{review.author[0]}</div>
                    <span
                      className="jdgm-rev__rating"
                      data-score={review.rating}
                      aria-label={`${review.rating} star review`}
                      role="img"
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className={`jdgm-star ${index < review.rating ? "jdgm--on" : "jdgm--off"}`}
                        />
                      ))}
                    </span>
                    <div className="jdgm-rev__br" />
                    <span className="jdgm-rev__author-wrapper">
                      <span className="jdgm-rev__author">{review.author}</span>
                    </span>
                  </div>
                  <div className="jdgm-rev__content">
                    {review.title ? <b className="jdgm-rev__title">{review.title}</b> : null}
                    <div className="jdgm-rev__body">
                      <p>{review.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 ? (
          <section className="section section-blends section-full">
            <div className="section-stack">
              <section-header className="section-header">
                <div className="prose">
                  <p className="subheading">You may also like</p>
                  <h2 className="h2">Related Products</h2>
                </div>
              </section-header>

              <div className="product-grid">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.slug} product={relatedProduct} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
