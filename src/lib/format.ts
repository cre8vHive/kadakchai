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
