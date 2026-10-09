import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../../utils/constants";

export default function WhatsAppButton() {
  return (
    <motion.a href={getWhatsAppLink("Hi! I'd like some help choosing a dashcam from RoadEye.")} target="_blank" rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ delay: 1 }}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-soft flex items-center justify-center">
      <MessageCircle size={26} fill="white" />
    </motion.a>
  );
}
