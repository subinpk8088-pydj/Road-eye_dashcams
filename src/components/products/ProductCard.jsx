import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Check } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { formatPrice, discountPercent } from "../../utils/helpers";

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const discount = discountPercent(product.price, product.mrp);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }} whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden bg-white glass shadow-glass hover:shadow-soft transition-shadow duration-300 flex flex-col">
      <Link to={`/product/${product.id}`} className="block flex-1 flex flex-col" aria-label={`View ${product.name}`}>
        <div className="relative aspect-square overflow-hidden bg-mist">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discount > 0 && <span className="bg-red text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-bold">{discount}% OFF</span>}
            {product.isNew && <span className="bg-blue text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-bold">New</span>}
            {!product.inStock && <span className="bg-ink/80 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">Out of Stock</span>}
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <p className="text-[11px] uppercase tracking-wide text-blue font-bold mb-1">{product.specs.resolution}</p>
          <h3 className="font-display text-base font-bold text-ink leading-snug mb-1">{product.name}</h3>
          <div className="flex items-center gap-1 text-amber mb-3">
            <Star size={12} fill="currentColor" />
            <span className="text-xs text-ink/60">{product.rating} ({product.reviews})</span>
          </div>
          <div className="mt-auto flex items-baseline gap-2">
            <span className="font-body font-extrabold text-ink text-lg">{formatPrice(product.price)}</span>
            {product.mrp > product.price && <span className="text-xs text-ink/40 line-through">{formatPrice(product.mrp)}</span>}
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button onClick={handleAddToCart} disabled={!product.inStock}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-blue-gradient text-white text-xs uppercase tracking-wide font-bold shadow-soft hover:shadow-lg transition-all disabled:opacity-40 disabled:shadow-none">
          <AnimatePresence mode="wait">
            {added ? (
              <motion.span key="added" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-1.5"><Check size={14} /> Added</motion.span>
            ) : (
              <motion.span key="add" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-1.5"><ShoppingCart size={14} /> {product.inStock ? "Add to Cart" : "Out of Stock"}</motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
}
