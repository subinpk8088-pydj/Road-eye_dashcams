export const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;
export const discountPercent = (price, mrp) => (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);
export const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
