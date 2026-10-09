import ProductCard from "./ProductCard";
import { CardSkeleton } from "../common/Skeleton";

export default function ProductGrid({ products, loading = false }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)}
      </div>
    );
  }
  if (!products.length) {
    return (
      <div className="text-center py-24">
        <p className="font-display text-2xl text-ink/60 font-bold">No dashcams match your filters.</p>
        <p className="text-sm text-ink/40 mt-2">Try a different category or search term.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
      {products.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}
    </div>
  );
}
