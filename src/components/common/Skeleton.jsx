export function CardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white/70 shadow-glass">
      <div className="skeleton w-full aspect-square" />
      <div className="p-4 space-y-3">
        <div className="skeleton h-4 w-3/4 rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
        <div className="skeleton h-5 w-1/3 rounded" />
      </div>
    </div>
  );
}
