import { motion } from "framer-motion";
import { ShieldCheck, Video, Eye, Zap } from "lucide-react";
import Counter from "../components/common/Counter";
import SectionTitle from "../components/common/SectionTitle";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { STATS } from "../utils/constants";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "../utils/animations";

const VALUES = [
  { icon: Video, title: "Uncompromising Clarity", text: "We test every model on real roads, at night and in rain, before it earns the RoadEye name." },
  { icon: Eye, title: "Honest Specs", text: "No inflated resolution claims — what's on the box is what you get on the road." },
  { icon: Zap, title: "Reliability First", text: "Heat-resistant capacitors and high-endurance storage built for Indian summers." },
  { icon: ShieldCheck, title: "Real Support", text: "A 2-year warranty and a real person on WhatsApp when you need help." },
];

const TIMELINE = [
  { year: "2018", title: "The First Prototype", text: "RoadEye began as a small garage project after a founder's own hit-and-run went unproven." },
  { year: "2020", title: "First 1,000 Customers", text: "Word-of-mouth from drivers and fleet owners carried the S2 to its first thousand sales." },
  { year: "2023", title: "4K Generation", text: "Launched the S4 with Sony STARVIS night vision and built-in GPS." },
  { year: "2026", title: "RoadEye Today", text: "45,000+ dashcams on the road across 120+ cities." },
];

export default function About() {
  const stats = useScrollAnimation(0.3);
  return (
    <div className="pt-12 pb-24 bg-cloud min-h-screen overflow-hidden">
      <section className="container-custom mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="uppercase tracking-[0.2em] text-xs text-blue font-bold">Our Story</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mt-3 mb-6 leading-tight">Built Because the Truth Matters</h1>
            <p className="text-ink/70 leading-relaxed mb-4">RoadEye started after a hit-and-run that nobody could prove. We built the dashcam we wished we'd had: sharp enough to read a plate, tough enough to survive the summer heat, and simple enough to set up in minutes.</p>
            <p className="text-ink/70 leading-relaxed">Today, thousands of drivers — from daily commuters to fleet operators — rely on RoadEye to protect them with clear, honest footage.</p>
          </motion.div>
          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
            <img src="https://images.unsplash.com/photo-1600705722738-70e4056a4e30?w=900&q=80" alt="RoadEye dashcam" className="rounded-3xl shadow-glass w-full h-[420px] object-cover" loading="lazy" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white mb-28">
        <div className="container-custom">
          <SectionTitle eyebrow="What We Stand For" title="Our Principles" subtitle="Every RoadEye product is built around these four commitments." />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="glass bg-cloud rounded-2xl p-7 text-center shadow-glass hover:shadow-soft transition-shadow">
                <div className="w-14 h-14 mx-auto rounded-full bg-blue-gradient flex items-center justify-center mb-4"><v.icon size={24} className="text-white" /></div>
                <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="container-custom mb-28">
        <SectionTitle eyebrow="Our Journey" title="How We Got Here" />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-blue/30 md:-translate-x-1/2" />
          {TIMELINE.map((item, i) => (
            <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"}`}>
              <span className="absolute top-1 w-3 h-3 rounded-full bg-blue left-2.5 md:left-auto" style={i % 2 === 0 ? { right: "-6px" } : { left: "-6px" }} />
              <p className="font-display text-2xl text-blue font-bold mb-1">{item.year}</p>
              <h4 className="font-bold mb-1">{item.title}</h4>
              <p className="text-sm text-ink/60">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={stats.ref} className="py-16 bg-ink text-white">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <motion.div key={stat.id} custom={i} initial="hidden" animate={stats.controls} variants={fadeUp}>
              <p className="font-display text-4xl md:text-5xl font-bold gradient-text">
                {stats.inView && <Counter end={stat.value} duration={2.2} separator="," />}{stat.suffix}
              </p>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-widest text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
