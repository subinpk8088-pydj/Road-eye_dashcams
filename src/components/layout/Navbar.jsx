import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingCart, Video, Phone } from "lucide-react";
import { useCart } from "../../context/CartContext";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${isActive ? "text-blue" : "text-ink/70 hover:text-blue"}`;

  return (
    <>
      <div className="hidden sm:block bg-ink text-white/80 text-xs">
        <div className="container-custom flex items-center justify-between py-2">
          <span className="flex items-center gap-1.5"><Phone size={12} /> +91 94963 13744 — Expert Support</span>
          <span>Free shipping on orders above ₹7,999</span>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "py-3 glass shadow-glass" : "py-4 bg-cloud/80 backdrop-blur-sm"}`}>
        <nav className="container-custom flex items-center justify-between gap-4" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-2 font-display text-xl md:text-2xl font-bold tracking-tight gradient-text flex-shrink-0">
            <Video size={22} className="text-blue" /> ROADEYE
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={linkClass} end={link.path === "/"}>{link.label}</NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-4">
            <Link to="/cart" aria-label="Cart" className="relative text-ink hover:text-blue transition-colors">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </Link>
            <button className="lg:hidden text-ink" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={24} /></button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] glass-dark lg:hidden">
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.35 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-cloud shadow-glass p-8 flex flex-col overflow-y-auto">
              <button className="self-end text-ink mb-10" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={26} /></button>
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.li key={link.path} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }}>
                    <NavLink to={link.path} onClick={() => setMenuOpen(false)}
                      className={({ isActive }) => `font-display text-2xl font-bold uppercase ${isActive ? "text-blue" : "text-ink"}`} end={link.path === "/"}>
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + NAV_LINKS.length * 0.06 }}>
                  <Link to="/shop" onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-2 bg-blue-gradient text-white text-sm font-semibold px-6 py-3 rounded-full shadow-soft mt-2">
                    <ShoppingCart size={16} /> Shop Now
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
