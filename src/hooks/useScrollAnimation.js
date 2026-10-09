import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function useScrollAnimation(threshold = 0.15, triggerOnce = true) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });
  useEffect(() => {
    if (inView) controls.start("visible");
    else if (!triggerOnce) controls.start("hidden");
  }, [inView, controls, triggerOnce]);
  return { ref, controls, inView };
}
