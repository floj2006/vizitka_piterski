import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/79990000000"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-accent shadow-glow flex items-center justify-center text-bg"
      aria-label="Написать в WhatsApp"
    >
      <MessageCircle size={20} strokeWidth={2.5} />
    </motion.a>
  );
}
