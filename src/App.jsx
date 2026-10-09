import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/common/BackToTop";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Toast from "./components/common/Toast";
import { CartProvider } from "./context/CartContext";
import { pageTransition } from "./utils/animations";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-blue border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div {...pageTransition}><Home /></motion.div>} />
        <Route path="/shop" element={<motion.div {...pageTransition}><Shop /></motion.div>} />
        <Route path="/product/:id" element={<motion.div {...pageTransition}><ProductDetail /></motion.div>} />
        <Route path="/cart" element={<motion.div {...pageTransition}><Cart /></motion.div>} />
        <Route path="/about" element={<motion.div {...pageTransition}><About /></motion.div>} />
        <Route path="/contact" element={<motion.div {...pageTransition}><Contact /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <Toast />
    </CartProvider>
  );
}
