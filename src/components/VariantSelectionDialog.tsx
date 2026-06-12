import { useEffect, useState } from "react";
import { formatMoney, formatVariantSizeLabel } from "../lib/format";
import type { Product, ProductVariant } from "../types/store";

type VariantSelectionDialogProps = {
  product: Product;
  open: boolean;
  defaultVariantId: string;
  onConfirm: (variant: ProductVariant) => void;
  onClose: () => void;
};

export function VariantSelectionDialog({
  product,
  defaultVariantId,
  open,
  onConfirm,
  onClose,
}: VariantSelectionDialogProps) {
  const [selectedVariantId, setSelectedVariantId] = useState(defaultVariantId);

  useEffect(() => {
    setSelectedVariantId(defaultVariantId);
  }, [defaultVariantId, open]);

  if (!open) {
    return null;
  }

  const selectedVariant =
    product.variantOptions.find((variant) => variant.id === selectedVariantId) ??
    product.variantOptions[0];

  return (
    <div className="variant-modal-shell">
      <button
        type="button"
        className="variant-modal-overlay"
        onClick={onClose}
        aria-label="Close variant selector"
      />
      <section className="variant-modal-panel" role="dialog" aria-modal="true">
        <div className="variant-modal-head">
          <div>
            <p className="subheading">Choose a Size</p>
            <h2 className="h3">{product.shortTitle ?? product.title}</h2>
          </div>
          <button type="button" className="button button--icon" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="v-stack gap-3">
          {product.variantOptions.map((variant) => (
            <button
              key={variant.id}
              type="button"
              className={`variant-modal-option ${variant.id === selectedVariantId ? "is-active" : ""}`}
              onClick={() => setSelectedVariantId(variant.id)}
            >
              <div className="variant-modal-option__label">
                <span>{variant.label}</span>
                <span className="money">{formatMoney(variant.price)}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="h-stack gap-3 variant-modal-actions">
          <button type="button" className="button button--outline" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="button button--lg"
            onClick={() => onConfirm(selectedVariant)}
          >
            Add {formatVariantSizeLabel(selectedVariant.label)} to Cart
          </button>
        </div>
      </section>
    </div>
  );
}
