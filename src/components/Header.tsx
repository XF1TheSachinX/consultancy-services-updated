"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // shadow on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 4);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname?.startsWith(href);

    return (
        <header
            className={
                "w-full fixed top-0 left-0 z-30 border-b border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md transition-shadow " +
                (scrolled ? "shadow-md" : "shadow-none")
            }
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
                {/* Brand */}
                <Link
                    href="/"
                    className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
                >
                    Consultancy
                    <span className="text-blue-600 dark:text-blue-400">Pro</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                "relative transition-colors hover:text-blue-600 dark:hover:text-blue-400 " +
                                (isActive(link.href)
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-slate-700 dark:text-slate-200")
                            }
                        >
                            {link.label}
                            {isActive(link.href) && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-violet-500" />
                            )}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile right side */}
                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"
                        aria-label="Toggle navigation"
                    >
                        <motion.span
                            initial={false}
                            animate={{ rotate: open ? 90 : 0 }}
                            className="text-xl leading-none"
                        >
                            ☰
                        </motion.span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, y: -8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -8, height: 0 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
                    >
                        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={
                                        "py-2 text-sm font-medium rounded-lg px-2 transition-colors " +
                                        (isActive(link.href)
                                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-200"
                                            : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900")
                                    }
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}