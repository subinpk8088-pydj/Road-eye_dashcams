import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/helpers";
import Button from "../components/common/Button";
import { getWhatsAppLink } from "../utils/constants";

export default function Cart() {
  const { cart, updateQty, removeFromCart, cartTotal, showToast } = useCart();
  const shipping = cartTotal >= 7999 || cartTotal === 0 ? 0 : 199;
  const total = cartTotal + shipping;

  const handleCheckout = () => {
    const summary = cart.map((i) => `${i.qty}x ${i.name}`).join(", ");
    window.open(getWhatsAppLink(`Hi! I'd like to order: ${summary}. Total: ₹${total.toLocaleString("en-IN")}`), "_blank");
    showToast("Redirecting to checkout via WhatsApp...");
  };

  if (cart.length === 0) {
    return (
      <div className="pt-24 pb-24 min-h-screen bg-cloud flex flex-col items-center justify-center text-center px-6">
        <ShoppingCart size={64} className="text-blue/30 mb-6" />
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">Your Cart is Empty</h1>
        <p className="text-ink/60 mb-8 max-w-sm">Looks like you haven't added anything yet. Browse our dashcams to find the right fit.</p>
        <Button to="/shop" variant="primary">Browse Dashcams</Button>
      </div>
    );
  }

  return (
    <div className="pt-12 pb-24 bg-cloud min-h-screen">
      <div className="container-custom">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold gradient-text mb-10">Your Cart</motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div key={item.id} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }} transition={{ duration: 0.3 }}
                  className="glass bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-glass">
                  <Link to={`/product/${item.id}`} className="flex-shrink-0"><img src={item.image} alt={item.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover" /></Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`}><h3 className="font-display text-base font-bold text-ink truncate hover:text-blue">{item.name}</h3></Link>
                    <p className="text-xs text-ink/50">{item.specs.resolution}</p>
                    <p className="text-blue font-bold mt-1">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`} className="text-ink/40 hover:text-red transition-colors"><Trash2 size={18} /></button>
                    <div className="flex items-center border border-mist rounded-full">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity" className="w-8 h-8 flex items-center justify-center text-ink/70 hover:text-blue"><Minus size={13} /></button>
                      <span className="w-6 text-center text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity" className="w-8 h-8 flex items-center justify-center text-ink/70 hover:text-blue"><Plus size={13} /></button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass bg-white rounded-2xl p-6 sm:p-7 shadow-glass h-fit sticky top-24">
            <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-3 text-sm text-ink/70 mb-5">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(cartTotal)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
            </div>
            <div className="flex justify-between items-center border-t border-mist pt-4 mb-6">
              <span className="font-bold">Total</span>
              <span className="font-display text-2xl font-bold text-blue">{formatPrice(total)}</span>
            </div>
            <button onClick={handleCheckout} className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-gradient text-white font-body font-bold text-sm uppercase tracking-wide shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Checkout via WhatsApp <ArrowRight size={16} />
            </button>
            <Link to="/shop" className="block text-center text-sm text-ink/60 hover:text-blue mt-4">Continue Shopping</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
