import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({ children, variant = "primary", to, onClick, type = "button", className = "", icon: Icon, disabled = false, ariaLabel }) {
  const base = "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-blue-gradient text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
    ghost: "text-ink hover:text-blue",
    amber: "bg-amber-gradient text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5",
  };
  const content = (<>{Icon && <Icon size={16} />}{children}</>);
  const classes = `${base} ${variants[variant]} ${className}`;
  const motionProps = { whileHover: disabled ? {} : { scale: 1.03 }, whileTap: disabled ? {} : { scale: 0.97 } };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes} aria-label={ariaLabel}>{content}</Link>
      </motion.div>
    );
  }
  return (
    <motion.button {...motionProps} type={type} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {content}
    </motion.button>
  );
}
