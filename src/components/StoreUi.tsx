import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { buildDiscountLabel, formatMoney } from "../lib/format";
import type { Collection, Product, SiteLink } from "../types/store";

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

type ProductGalleryProps = {
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

              {isLast ? null : <span>/</span>}
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

  return (
    <article className="product-card">
      <Link
        to={`/products/${product.slug}`}
        className="product-card__media rounded-sm shadow"
        aria-label={product.title}
      >
        <img src={product.image} alt={product.title} />
      </Link>

      <div className="product-card__info">
        {product.badge ? <span className="badge badge--on-sale">{product.badge}</span> : null}
        <RatingBadge rating={product.rating} reviewCount={product.reviewCount} />
        <Link to={`/products/${product.slug}`} className="product-card__title h5">
          {product.shortTitle ?? product.title}
        </Link>
        <p className="text-subdued">{product.subtitle ?? product.description[0]}</p>

        <div className="div">
          <div className={product.compareAtPrice ? "text-on-sale" : "text-subdued"}>
            <span className="money">{formatMoney(product.price)}</span>
          </div>

          {product.compareAtPrice ? (
            <div className="text-subdued line-through">
              <span className="money">{formatMoney(product.compareAtPrice)}</span>
            </div>
          ) : null}

          {discountLabel ? <span className="discount-tile">{discountLabel}</span> : null}
        </div>

        <div className="product-card__actions">
          <button
            type="button"
            className="button button--lg product-card__add-button"
            onClick={() => addItem(product, primaryVariant)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(product.gallery[0] ?? product.image);

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <img src={activeImage} alt={product.title} />
      </div>

      <div className="product-gallery__thumbs">
        {product.gallery.map((image) => {
          const isActive = image === activeImage;

          return (
            <button
              key={image}
              type="button"
              className={`product-gallery__thumb ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveImage(image)}
            >
              <img src={image} alt="" />
            </button>
          );
        })}
      </div>
    </div>
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
        -
      </button>
      <input aria-label={label} readOnly value={quantity} />
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
