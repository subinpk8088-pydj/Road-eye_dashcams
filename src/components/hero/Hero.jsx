import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Video, ShieldCheck, Eye } from "lucide-react";
import Button from "../common/Button";

const TYPED_WORDS = ["Every Mile.", "Every Risk.", "Every Journey.", "Every Angle."];

function TypedText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_WORDS[wordIndex];
    const speed = deleting ? 55 : 110;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) setText(current.slice(0, text.length + 1));
        else setTimeout(() => setDeleting(true), 1200);
      } else {
        if (text.length > 0) setText(current.slice(0, text.length - 1));
        else { setDeleting(false); setWordIndex((prev) => (prev + 1) % TYPED_WORDS.length); }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (<span className="gradient-text">{text}<span className="animate-pulse">|</span></span>);
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist via-cloud to-cloud pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-amber/10 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs text-deep-blue font-bold mb-6 bg-white/70 px-4 py-2 rounded-full shadow-glass">
            <ShieldCheck size={14} /> Trusted by 45,000+ Drivers
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-[1.1]">
            See <br className="hidden sm:block" /><TypedText />
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-lg text-ink/70 text-base md:text-lg">
            4K recording, Sony night-vision sensors, and crash-proof reliability. RoadEye dashcams capture the truth — so you never have to argue about it.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button to="/shop" variant="primary">Shop Dashcams</Button>
            <Button to="/about" variant="outline">Why RoadEye</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }} className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[{ icon: Video, text: "True 4K recording" }, { icon: Eye, text: "Sony night vision" }, { icon: ShieldCheck, text: "2-year warranty" }].map((item) => (
              <div key={item.text} className="flex flex-col items-start gap-1.5">
                <item.icon size={20} className="text-blue" />
                <p className="text-xs text-ink/60 leading-tight">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
          <img src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1000&q=80" alt="RoadEye dashcam mounted on windshield"
            className="rounded-3xl shadow-glass w-full h-[380px] md:h-[460px] object-cover" loading="eager" />
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }}
            className="absolute top-5 right-5 flex items-center gap-1.5 bg-red text-white text-xs font-bold px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-white" /> REC
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-glass flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-gradient flex items-center justify-center"><ShieldCheck size={18} className="text-white" /></div>
            <div>
              <p className="text-sm font-bold text-ink">Crash Detection</p>
              <p className="text-xs text-ink/50">Auto-saves footage on impact</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="hidden md:flex justify-center mt-16 text-ink/30">
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
