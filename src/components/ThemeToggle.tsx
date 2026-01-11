"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const current = theme === "system" ? resolvedTheme : theme;
    const isDark = current === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative inline-flex items-center h-9 w-16 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-1 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Toggle theme"
        >
            {/* sliding knob */}
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute top-0.5 bottom-0.5 w-7 rounded-full bg-white dark:bg-slate-900 shadow-md"
                style={{
                    left: isDark ? "calc(100% - 1.9rem)" : "0.15rem",
                }}
            />

            {/* icons row */}
            <div className="relative flex w-full justify-between items-center text-xs">
        <span
            className={
                "flex-1 text-center transition-colors " +
                (isDark
                    ? "text-slate-400"
                    : "text-amber-500")
            }
        >
          ☀️
        </span>
                <span
                    className={
                        "flex-1 text-center transition-colors " +
                        (isDark
                            ? "text-sky-400"
                            : "text-slate-400")
                    }
                >
          🌙
        </span>
            </div>
        </button>
    );
}