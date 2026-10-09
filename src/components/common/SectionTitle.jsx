import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  const { ref, controls } = useScrollAnimation();
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <div ref={ref} className={`flex flex-col ${alignment} max-w-2xl mb-12 md:mb-16`}>
      {eyebrow && (
        <motion.span custom={0} initial="hidden" animate={controls} variants={fadeUp} className="uppercase tracking-[0.2em] text-xs md:text-sm text-blue font-bold mb-3">
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 custom={1} initial="hidden" animate={controls} variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p custom={2} initial="hidden" animate={controls} variants={fadeUp} className="mt-4 text-ink/70 text-base md:text-lg font-normal">
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
