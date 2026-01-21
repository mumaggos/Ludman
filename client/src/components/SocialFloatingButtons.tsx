import { motion } from "framer-motion";
import { MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function SocialFloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: "X (Twitter)",
      url: "https://x.com/ludbanlbd?s=21",
      icon: "𝕏",
      color: "bg-black hover:bg-gray-800",
      label: "X"
    },
    {
      name: "Telegram",
      url: "https://t.me/ludban_lbd",
      icon: "✈️",
      color: "bg-blue-500 hover:bg-blue-600",
      label: "Telegram"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg flex items-center justify-center text-white font-bold text-xl hover:shadow-xl transition-all duration-300"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle size={24} />
        </motion.div>
      </motion.button>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          scale: isOpen ? 1 : 0.8,
          pointerEvents: isOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-20 right-0 flex flex-col gap-3"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              y: isOpen ? 0 : 10 
            }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, x: 5 }}
            className={`flex items-center gap-3 px-4 py-2 rounded-full ${link.color} text-white shadow-lg transition-all duration-300 group`}
          >
            <span className="text-lg">{link.icon}</span>
            <span className="text-sm font-semibold">{link.label}</span>
            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </motion.div>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30"
        />
      )}
    </div>
  );
}
