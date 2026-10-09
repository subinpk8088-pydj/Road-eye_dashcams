import { useState } from "react";
import { SlidersHorizontal, Search } from "lucide-react";
import { PRODUCT_CATEGORIES } from "../../utils/constants";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function ProductFilter({ activeCategory, onCategoryChange, sortBy, onSortChange, search, onSearchChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="relative w-full md:max-w-xs">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
          <input type="text" value={search} onChange={(e) => onSearchChange(e.target.value)} placeholder="Search dashcams..." aria-label="Search products"
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white glass border border-mist focus:border-blue focus:outline-none text-sm" />
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-white glass text-sm"><SlidersHorizontal size={16} /> Filters</button>
          <label htmlFor="sort" className="sr-only">Sort by</label>
          <select id="sort" value={sortBy} onChange={(e) => onSortChange(e.target.value)}
            className="hidden md:block px-4 py-2.5 rounded-full bg-white glass border border-mist text-sm focus:outline-none focus:border-blue cursor-pointer">
            {SORT_OPTIONS.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
      </div>

      <div className={`${mobileOpen ? "flex" : "hidden"} md:flex flex-wrap gap-3`}>
        {PRODUCT_CATEGORIES.map((cat) => (
          <button key={cat.id} onClick={() => onCategoryChange(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat.id ? "bg-blue-gradient text-white shadow-soft" : "bg-white text-ink/70 hover:bg-mist"}`}>
            {cat.label}
          </button>
        ))}
        {mobileOpen && (
          <div className="w-full mt-3 md:hidden">
            <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} className="w-full px-4 py-2.5 rounded-full bg-white glass border border-mist text-sm focus:outline-none">
              {SORT_OPTIONS.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
