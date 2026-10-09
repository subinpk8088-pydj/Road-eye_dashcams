import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Minus, Plus, ShoppingCart, Check, Truck, ShieldCheck, MessageCircle } from "lucide-react";
import { PRODUCTS, getWhatsAppLink } from "../utils/constants";
import { formatPrice, discountPercent } from "../utils/helpers";
import { useCart } from "../context/CartContext";
import ProductGrid from "../components/products/ProductGrid";
import SectionTitle from "../components/common/SectionTitle";

const SPEC_LABELS = { resolution: "Resolution", fov: "Field of View", nightVision: "Night Vision", storage: "Max Storage", gps: "GPS" };

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) return <Navigate to="/shop" replace />;

  const discount = discountPercent(product.price, product.mrp);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-12 pb-24 bg-cloud min-h-screen">
      <div className="container-custom">
        <nav className="text-xs text-ink/50 mb-8 flex gap-2" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-blue">Home</Link> /
          <Link to="/shop" className="hover:text-blue">Shop</Link> /
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-glass aspect-square bg-white">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {discount > 0 && <span className="absolute top-4 left-4 bg-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">{discount}% OFF</span>}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">{product.name}</h1>
            <div className="flex items-center gap-2 mb-5">
              <div className="flex text-amber">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />)}</div>
              <span className="text-sm text-ink/60">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-ink">{formatPrice(product.price)}</span>
              {product.mrp > product.price && <span className="text-lg text-ink/40 line-through">{formatPrice(product.mrp)}</span>}
            </div>

            <p className="text-ink/70 leading-relaxed mb-6">{product.description}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-ink/70"><Check size={15} className="text-blue flex-shrink-0" /> {f}</li>
              ))}
            </ul>

            {!product.inStock && <p className="text-sm text-red font-bold mb-4">Currently out of stock — check back soon!</p>}

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-mist rounded-full bg-white">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="w-11 h-11 flex items-center justify-center text-ink/70 hover:text-blue"><Minus size={16} /></button>
                <span className="w-8 text-center font-bold">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity" className="w-11 h-11 flex items-center justify-center text-ink/70 hover:text-blue"><Plus size={16} /></button>
              </div>
              <button onClick={() => addToCart(product, qty)} disabled={!product.inStock}
                className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-gradient text-white font-body font-bold text-sm uppercase tracking-wide shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-40">
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>

            <a href={getWhatsAppLink(`Hi! I'm interested in the ${product.name} (${formatPrice(product.price)}). Is it available?`)} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ink/60 hover:text-blue mb-8 w-fit"><MessageCircle size={16} /> Ask about this dashcam on WhatsApp</a>

            <div className="grid grid-cols-2 gap-4 border-t border-mist pt-6">
              <div className="flex items-center gap-2 text-sm text-ink/60"><Truck size={18} className="text-blue" /> Free shipping over ₹7,999</div>
              <div className="flex items-center gap-2 text-sm text-ink/60"><ShieldCheck size={18} className="text-blue" /> 2-year warranty</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="font-display text-2xl font-bold mb-5">Specifications</h2>
          <div className="glass bg-white rounded-2xl shadow-glass divide-y divide-mist">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4 px-6 py-3.5 text-sm">
                <span className="text-ink/50">{SPEC_LABELS[key] || key}</span>
                <span className="font-semibold text-ink text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <SectionTitle eyebrow="You May Also Like" title="Related Products" align="left" />
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </div>
  );
}
