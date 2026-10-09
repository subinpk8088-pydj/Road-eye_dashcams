import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck, Video, Eye, Zap } from "lucide-react";
import Hero from "../components/hero/Hero";
import SectionTitle from "../components/common/SectionTitle";
import AnimatedSection from "../components/common/AnimatedSection";
import Button from "../components/common/Button";
import Counter from "../components/common/Counter";
import ProductGrid from "../components/products/ProductGrid";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { PRODUCTS, TESTIMONIALS, STATS } from "../utils/constants";
import { staggerContainer, fadeUp } from "../utils/animations";

const TRUST_BADGES = [
  { icon: Video, title: "True 4K Clarity", text: "Sharp enough to read a license plate from a distance, day or night." },
  { icon: Eye, title: "Sony Night Vision", text: "STARVIS sensors capture clear footage even in near-total darkness." },
  { icon: Zap, title: "Instant Crash Detection", text: "G-sensor automatically locks and saves footage the moment impact is detected." },
  { icon: ShieldCheck, title: "2-Year Warranty", text: "Every RoadEye dashcam is backed by a full manufacturer warranty." },
];

function TrustSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6">
        {TRUST_BADGES.map((badge, i) => (
          <motion.div key={badge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }} className="flex flex-col items-center text-center gap-2 px-2">
            <div className="w-12 h-12 rounded-full bg-mist flex items-center justify-center"><badge.icon size={22} className="text-blue" /></div>
            <h4 className="text-sm font-bold text-ink">{badge.title}</h4>
            <p className="text-xs text-ink/50 leading-snug">{badge.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, controls, inView } = useScrollAnimation(0.3);
  return (
    <AnimatedSection className="py-20 bg-ink text-white">
      <div ref={ref} className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat, i) => (
          <motion.div key={stat.id} custom={i} initial="hidden" animate={controls} variants={fadeUp}>
            <p className="font-display text-4xl md:text-5xl font-bold gradient-text">
              {inView && <Counter end={stat.value} duration={2.2} separator="," />}{stat.suffix}
            </p>
            <p className="mt-2 text-xs md:text-sm uppercase tracking-widest text-white/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-mist">
      <div className="container-custom">
        <SectionTitle eyebrow="Trusted on Every Road" title="What Drivers Say" subtitle="Real stories from drivers who trust RoadEye to capture the truth." />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.id} variants={fadeUp} className="glass bg-white rounded-2xl p-7 shadow-glass relative">
              <Quote className="text-blue/30 mb-3" size={32} />
              <p className="text-ink/80 italic mb-5 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-bold text-ink text-sm">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.role}</p>
                </div>
                <div className="ml-auto flex text-amber">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill={i < Math.round(t.rating) ? "currentColor" : "none"} />)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 8);
  return (
    <>
      <Hero />
      <TrustSection />
      <section className="py-24 bg-cloud">
        <div className="container-custom">
          <SectionTitle eyebrow="Customer Favorites" title="Bestselling Dashcams" subtitle="The models our customers trust most for daily driving and road-trip peace of mind." />
          <ProductGrid products={bestSellers} />
          <div className="flex justify-center mt-12"><Button to="/shop" variant="outline">View All Dashcams</Button></div>
        </div>
      </section>
      <StatsSection />
      <TestimonialsSection />
      <section className="py-28 bg-blue-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="container-custom relative text-center max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Don't Wait for an Accident to Wish You Had One
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white/90 mb-8">
            Free shipping on orders above ₹7,999. 2-year warranty on every dashcam.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Button to="/shop" variant="amber">Shop Now</Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
