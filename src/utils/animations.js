export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] } }),
};
export const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};
export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: "easeIn" } },
};
