import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import { buildDiscountLabel, formatMoney, formatVariantSizeLabel } from "../lib/format";
import type { Collection, Product, SiteLink } from "../types/store";
import { VariantSelectionDialog } from "./VariantSelectionDialog";
import { useState } from "react";
type BreadcrumbsProps = {
  links: SiteLink[];
};

type RatingBadgeProps = {
  rating: number;
  reviewCount: number;
};

type CollectionCardProps = {
  collection: Collection;
};

type ProductCardProps = {
  product: Product;
};

type QuantityControlProps = {
  label: string;
  quantity: number;
  onChange: (quantity: number) => void;
};

export function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs text-sm text-subdued" aria-label="Breadcrumb">
      <ol className="h-stack gap-3">
        {links.map((link, index) => {
          const isLast = index === links.length - 1;

          return (
            <li key={`${link.to}-${link.label}`} className="h-stack gap-3 items-center">
              {isLast ? (
                <span>{link.label}</span>
              ) : (
                <Link to={link.to} className="link-faded">
                  {link.label}
                </Link>
              )}

              {isLast ? null : <span className="breadcrumb-separator">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function RatingBadge({ rating, reviewCount }: RatingBadgeProps) {
  return (
    <div className="jdgm-widget jdgm-preview-badge rating">
      <span className="jdgm-prev-badge" data-number-of-reviews={reviewCount}>
        <span className="jdgm-prev-badge__stars" data-score={rating.toFixed(1)}>
          {Array.from({ length: 5 }).map((_, index) => {
            const difference = rating - index;
            const state =
              difference >= 1 ? "jdgm--on" : difference >= 0.5 ? "jdgm--half" : "jdgm--off";

            return <span key={index} className={`jdgm-star ${state}`} />;
          })}
        </span>
        <span className="jdgm-prev-badge__text">({reviewCount})</span>
      </span>
    </div>
  );
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link
      to={`/collections/${collection.slug}`}
      className="collection-card collection-card--reverse-transition shadow"
    >
      <div className="content-over-media group rounded-sm">
        <img src={collection.heroImage} alt={collection.title} className="zoom-image" />
        <div className="collection-card__content-wrapper text-center" />
      </div>
      <p className="h5 coll-list-title">{collection.title}</p>
    </Link>
  );
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const primaryVariant = product.variantOptions[0];
  const discountLabel = buildDiscountLabel(product.price, product.compareAtPrice);
  const isComboProduct = product.isCombo === true || product.badge?.toLowerCase().includes("combo");
  const weightLabel =
    !isComboProduct && primaryVariant
      ? formatVariantSizeLabel(primaryVariant.cartLabel ?? primaryVariant.label)
      : "";
  const [isVariantDialogOpen, setIsVariantDialogOpen] = useState(false);
  const [selectedVariantId, setSelectedVariantId] = useState(primaryVariant?.id ?? "");
  const [isExpanded, setIsExpanded] = useState(false);
  const requiresSelection = Boolean(product.requiresVariantSelection && product.variantOptions.length > 1);
  const isExpandableProduct =
    product.slug === "Kadak Chai" ||
    product.slug === "Superr Dust" ||
    product.slug === "Blue Pea" ||
    product.slug === "Hibiscus" ||
    product.slug === "Rose Gold Tea" ||
    product.slug === "Celestail";
  const isSuperrDust = product.slug === "Superr Dust";
  const isBluePea = product.slug === "Blue Pea";
  const isHibiscus = product.slug === "Hibiscus";
  const isRoseGold = product.slug === "Rose Gold Tea";
  const isChamomile = product.slug === "Celestail";
  const learnMoreId = `${product.slug.replace(/\s+/g, "-").toLowerCase()}-learn-more`;

  return (
    <>
      <article className="product-card">
      <div
        className="product-card__media rounded-sm shadow"
        aria-label={product.title}
        role="button"
        onClick={(e) => e.preventDefault()}
      >
        <img src={product.image} alt={product.title} className="product-card__image" />
      </div>

      <div className="product-card__info">
        {product.badge ? <span className="badge badge--on-sale">{product.badge}</span> : null}
        <RatingBadge rating={product.rating} reviewCount={product.reviewCount} />
        <h2 className="product-card__title h5">
          {product.shortTitle ?? product.title}
        </h2>
        <p className="text-subdued">{product.subtitle ?? product.description[0]}</p>

        {isExpandableProduct ? (
          <>
            <button
              type="button"
              className="button button--outline product-card__learn-more"
              aria-expanded={isExpanded}
              aria-controls={learnMoreId}
              onClick={() => setIsExpanded((current) => !current)}
            >
              {isExpanded ? "Show Less" : "Learn More"}
            </button>

            <div
              id={learnMoreId}
              className={`product-card__learn-more-content ${isExpanded ? "is-open" : ""}`}
              aria-hidden={!isExpanded}
            >
              <p>
                {isChamomile
                  ? "Experience pure calm in every cup with our Chamomile Herbal Infusion. Crafted from carefully selected chamomile blossoms, this soothing caffeine-free blend is designed to help you unwind, relax, and restore balance. Delicate floral notes combine with a naturally smooth and comforting taste, making it the perfect companion for peaceful mornings, mindful afternoons, and restful evenings."
                  : isRoseGold
                  ? "Indulge in the delicate charm of premium orthodox long leaf tea infused with the enchanting aroma of roses. Carefully handcrafted for tea lovers and connoisseurs, this elegant blend combines rich tea notes with graceful floral undertones, creating a smooth and refreshing cup that soothes the senses."
                  : isHibiscus
                  ? "A refreshing blend of carefully selected green tea leaves crafted to support a balanced lifestyle. Light, smooth, and naturally invigorating."
                  : isBluePea
                  ? "Made from carefully sourced Butterfly Pea flowers, this caffeine-free herbal infusion offers a naturally vibrant blue color and a soothing wellness experience."
                  : isSuperrDust
                  ? "Specially crafted for tea lovers who prefer a stronger and quicker brew. Our Superr Dust Tea delivers exceptional color, bold flavor, and a refreshing experience in every cup."
                  : "Experience the authentic strength of traditional Indian tea with our signature Kadak Chai. Crafted using carefully selected premium CTC tea leaves, this blend delivers a bold aroma, rich color, and full-bodied flavor that tea lovers crave."}
              </p>

              <div className="product-card__learn-more-section">
                <p className="bold">Why You&apos;ll Love It</p>
                <ul className="product-card__learn-more-list">
                  {isChamomile ? (
                    <>
                      <li>Made with carefully selected chamomile flowers</li>
                      <li>Naturally calming and caffeine-free</li>
                      <li>Light floral aroma with a smooth, soothing finish</li>
                      <li>Ideal for relaxation, stress relief, and bedtime rituals</li>
                      <li>Enjoy hot or iced for a refreshing herbal experience</li>
                    </>
                  ) : isRoseGold ? (
                    <>
                      <li>Premium orthodox long leaf tea</li>
                      <li>Natural rose-infused aroma</li>
                      <li>Smooth floral finish</li>
                      <li>Handcrafted luxury blend</li>
                      <li>Ideal for mornings, afternoon breaks, and evening relaxation</li>
                    </>
                  ) : isHibiscus ? (
                    <>
                      <li>Rich in antioxidants</li>
                      <li>Light and refreshing taste</li>
                      <li>Supports daily wellness routines</li>
                      <li>Premium whole leaf quality</li>
                      <li>Naturally low in calories</li>
                    </>
                  ) : isBluePea ? (
                    <>
                      <li>100% Natural Butterfly Pea Flowers</li>
                      <li>Caffeine-free herbal infusion</li>
                      <li>Rich in natural antioxidants</li>
                      <li>Color-changing tea when lemon is added</li>
                      <li>Suitable for wellness-focused lifestyles</li>
                    </>
                  ) : isSuperrDust ? (
                    <>
                      <li>Fine dust tea blend</li>
                      <li>Quick brewing formula</li>
                      <li>Strong aroma and taste</li>
                      <li>Excellent color extraction</li>
                      <li>Suitable for homes, offices, and cafes</li>
                    </>
                  ) : (
                    <>
                      <li>Strong and refreshing taste</li>
                      <li>Premium quality CTC tea leaves</li>
                      <li>Rich aroma and deep liquor</li>
                      <li>Perfect for milk tea preparations</li>
                      <li>Ideal for everyday consumption</li>
                    </>
                  )}
                </ul>

                <p className="bold">Available Sizes</p>
                <ul className="product-card__learn-more-list">
                  {isChamomile ? (
                    <>
                      <li>50g</li>
                    </>
                  ) : isRoseGold ? (
                    <>
                      <li>50g</li>
                    </>
                  ) : isHibiscus ? (
                    <>
                      <li>50g</li>
                    </>
                  ) : isBluePea ? (
                    <>
                      <li>50g</li>
                    </>
                  ) : (
                    <>
                      <li>100g</li>
                      <li>250g</li>
                      <li>500g</li>
                      <li>1KG</li>
                    </>
                  )}
                </ul>

                {isChamomile ? (
                  <>
                    <p className="text-strong">Sip. Relax. Restore.</p>
                    <p className="text-subdued">Let every cup bring a moment of serenity to your day with the gentle aroma and comforting taste of our rich Chamomile Herbal Infusion.</p>
                  </>
                ) : isRoseGold ? (
                  <p className="text-strong">Sip Elegance. Embrace Serenity.</p>
                ) : null}
              </div>
            </div>
          </>
        ) : null}

        <div className="product-card__pricing">
          {weightLabel ? <p className="product-card__weight text-subdued">{weightLabel}</p> : null}

          <div className={primaryVariant?.compareAtPrice ? "text-on-sale" : "text-subdued"}>
            <span className="money">{formatMoney(primaryVariant?.price ?? product.price)}</span>
          </div>

          {primaryVariant?.compareAtPrice ? (
            <div className="text-subdued line-through">
              <span className="money">{formatMoney(primaryVariant.compareAtPrice)}</span>
            </div>
          ) : null}

          {discountLabel ? <span className="discount-tile">{discountLabel}</span> : null}
        </div>

        <div className="product-card__actions">
          <button
            type="button"
            className="button button--lg product-card__add-button"
            onClick={() => {
              if (requiresSelection) {
                setSelectedVariantId(primaryVariant?.id ?? "");
                setIsVariantDialogOpen(true);
                return;
              }

              if (primaryVariant) {
                addItem(product, primaryVariant);
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      </article>
      <VariantSelectionDialog
        product={product}
        open={isVariantDialogOpen}
        defaultVariantId={selectedVariantId}
        onClose={() => setIsVariantDialogOpen(false)}
        onConfirm={(variant) => {
          addItem(product, variant);
          setIsVariantDialogOpen(false);
        }}
      />
    </>
  );
}

type ProductGalleryProps = {
  product: Product;
};

export function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className="product-gallery">
      <div className="product-gallery__main rounded-sm shadow">
        <img src={product.image} alt={product.title} />
      </div>
    </div>
  );
}

type CollectionBundleCardProps = {
  title: string;
  subtitle: string;
  image: string;
  productCount: number;
  totalPrice: number;
  onAddBundle: () => void;
};

export function CollectionBundleCard({
  title,
  subtitle,
  image,
  productCount,
  totalPrice,
  onAddBundle,
}: CollectionBundleCardProps) {
  return (
    <article className="product-card bundle-card">
      <div className="bundle-card__tag">Featured Bundle</div>
      <div className="bundle-card__media rounded-sm shadow">
        <img src={image} alt={title} />
      </div>

      <div className="bundle-card__info">
        <span className="badge badge--on-sale">Combo</span>
        <h2 className="h4">{title}</h2>
        <p className="text-subdued">{subtitle}</p>

        <div className="div bundle-card__summary">
          <p>{productCount} items included</p>
          <div className="bundle-card__pricing">
            <span className="money">{formatMoney(totalPrice)}</span>
          </div>
        </div>

        <div className="product-card__actions">
          <button type="button" className="button button--lg product-card__add-button" onClick={onAddBundle}>
            Add Combo to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export function QuantityControl({
  label,
  quantity,
  onChange,
}: QuantityControlProps) {
  return (
    <div className="quantity-control" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        aria-label={`Decrease ${label}`}
      >
        −
      </button>

      <span className="quantity-control__value">{quantity}</span>

      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        aria-label={`Increase ${label}`}
      >
        +
      </button>
    </div>
  );
}
