"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
    const phoneNumber = "919999999999"; // put your real number
    const presetMessage = encodeURIComponent(
        "Hi! I visited your consultancy website and would like to know more."
    );

    const href = `https://wa.me/${phoneNumber}?text=${presetMessage}`;

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-5 right-5 md:bottom-8 md:right-8 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl pl-3 pr-4 py-2 text-sm font-medium hover:-translate-y-1 transition-transform"
            aria-label="Chat on WhatsApp"
        >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-lg">
        💬
      </span>
            <span className="hidden sm:inline">Chat on WhatsApp</span>
        </motion.a>
    );
}