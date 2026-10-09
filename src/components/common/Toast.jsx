import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function Toast() {
  const { toast } = useCart();
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none" aria-live="polite">
      <AnimatePresence>
        {toast && (
          <motion.div key={toast.id} initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }} transition={{ duration: 0.3 }}
            className="glass-dark text-white px-6 py-3 rounded-full shadow-glass flex items-center gap-2 text-sm font-body max-w-[90vw] text-center">
            <CheckCircle2 size={18} className="text-amber flex-shrink-0" />
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
