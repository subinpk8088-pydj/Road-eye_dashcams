import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import { PRODUCTS } from "../utils/constants";

const PAGE_SIZE = 8;

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [sortBy, setSortBy] = useState("featured");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 450); return () => clearTimeout(t); }, []);
  useEffect(() => setPage(1), [category, sortBy, search]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSearchParams(cat === "all" ? {} : { category: cat });
  };

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }
    switch (sortBy) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      default: list.sort((a, b) => (b.isBestSeller === a.isBestSeller ? 0 : b.isBestSeller ? 1 : -1));
    }
    return list;
  }, [category, sortBy, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="pt-12 pb-24 bg-cloud min-h-screen">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 text-center">
          <span className="uppercase tracking-[0.2em] text-xs text-blue font-bold">Shop All</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mt-3">Dashcams & Accessories</h1>
          <p className="text-ink/60 mt-3 max-w-lg mx-auto">{filtered.length} product{filtered.length !== 1 ? "s" : ""} ready to ship.</p>
        </motion.div>

        <ProductFilter activeCategory={category} onCategoryChange={handleCategoryChange} sortBy={sortBy} onSortChange={setSortBy} search={search} onSearchChange={setSearch} />
        <ProductGrid products={paginated} loading={loading} />

        {!loading && totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-14">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} aria-label="Previous page" className="w-10 h-10 rounded-full bg-white glass flex items-center justify-center disabled:opacity-40"><ChevronLeft size={18} /></button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i + 1)} aria-label={`Go to page ${i + 1}`} aria-current={page === i + 1 ? "page" : undefined}
                className={`w-10 h-10 rounded-full text-sm transition-colors ${page === i + 1 ? "bg-blue-gradient text-white" : "bg-white glass text-ink/70"}`}>{i + 1}</button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} aria-label="Next page" className="w-10 h-10 rounded-full bg-white glass flex items-center justify-center disabled:opacity-40"><ChevronRight size={18} /></button>
          </div>
        )}
      </div>
    </div>
  );
}
