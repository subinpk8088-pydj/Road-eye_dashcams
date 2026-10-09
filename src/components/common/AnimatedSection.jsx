import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { fadeUp } from "../../utils/animations";

export default function AnimatedSection({ children, className = "", delay = 0, as = "section" }) {
  const { ref, controls } = useScrollAnimation();
  const Tag = motion[as] || motion.section;
  return (
    <Tag ref={ref} custom={delay} initial="hidden" animate={controls} variants={fadeUp} className={className}>
      {children}
    </Tag>
  );
}
