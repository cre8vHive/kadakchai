const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatMoney(amount: number) {
  return currencyFormatter.format(amount);
}

export function buildDiscountLabel(price: number, compareAtPrice?: number) {
  if (!compareAtPrice || compareAtPrice <= price) {
    return "";
  }

  const discount = Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
  return `${discount}% OFF`;
}

export function formatVariantSizeLabel(label: string) {
  const normalized = label.trim();

  if (/\bx\b/i.test(normalized)) {
    return normalized;
  }

  const kgMatch = normalized.match(/^([0-9]+(?:\.[0-9]+)?)\s*kg$/i);
  if (kgMatch) {
    const value = parseFloat(kgMatch[1]);
    return `${value % 1 === 0 ? value.toFixed(0) : value}kg`;
  }

  const gramsMatch = normalized.match(/^([0-9]+(?:\.[0-9]+)?)\s*(?:g|grams?)$/i);
  if (gramsMatch) {
    const grams = Math.round(parseFloat(gramsMatch[1]));
    return `${grams}g`;
  }

  return normalized;
}
