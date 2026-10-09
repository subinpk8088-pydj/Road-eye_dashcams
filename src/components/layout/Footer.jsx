import { useState } from "react";
import { Link } from "react-router-dom";
import { AtSign, Users, MessageSquare, Send, MapPin, Phone, Clock, Video, ShieldCheck } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast("Thanks for subscribing to RoadEye updates!");
    setEmail("");
  };

  return (
    <footer className="bg-ink text-white/80 pt-20 pb-8 mt-24">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="flex items-center gap-2 font-display text-2xl text-white mb-4 font-bold"><Video size={22} className="text-blue" /> ROADEYE</h3>
          <p className="text-sm leading-relaxed text-white/60 mb-4">Premium dashcams engineered for clarity, reliability, and peace of mind on every drive.</p>
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4"><ShieldCheck size={14} className="text-amber" /> 2-year warranty on all dashcams</div>
          <div className="flex gap-4">
            {[AtSign, Users, MessageSquare].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue hover:border-blue transition-colors"><Icon size={16} /></a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5">Shop</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/shop" className="hover:text-blue transition-colors">All Dashcams</Link></li>
            <li><Link to="/shop?category=dual" className="hover:text-blue transition-colors">Dual Channel</Link></li>
            <li><Link to="/shop?category=accessories" className="hover:text-blue transition-colors">Accessories</Link></li>
            <li><Link to="/cart" className="hover:text-blue transition-colors">My Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 flex-shrink-0" /> Kannur, Kerala, India</li>
            <li className="flex items-start gap-2"><Phone size={15} className="mt-0.5 flex-shrink-0" /> +91 94963 13744</li>
            <li className="flex items-start gap-2"><Clock size={15} className="mt-0.5 flex-shrink-0" /> Mon – Sat: 9AM – 7PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm uppercase tracking-widest mb-5">Stay Updated</h4>
          <p className="text-sm text-white/60 mb-4">New product drops and exclusive offers, straight to your inbox.</p>
          <form onSubmit={handleSubscribe} className="flex items-center gap-2">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input id="footer-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email"
              className="flex-1 bg-transparent border border-white/25 rounded-full px-4 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:border-blue" />
            <button type="submit" aria-label="Subscribe" className="w-10 h-10 rounded-full bg-blue-gradient flex items-center justify-center flex-shrink-0"><Send size={16} className="text-white" /></button>
          </form>
        </div>
      </div>

      <div className="container-custom pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <p>© {new Date().getFullYear()} RoadEye. All rights reserved.</p>
        <p>See every mile.</p>
      </div>
    </footer>
  );
}
