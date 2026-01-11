"use client";

import {
    Mail,
    Phone,
    MessageCircle,
    ArrowUpRight,
    ArrowUp,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Show button after some scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <footer className="relative border-t border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/95 backdrop-blur-xl">
                {/* subtle gradient glow */}
                <div className="pointer-events-none absolute -top-10 left-0 right-0 h-16 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-sky-500/10 blur-2xl" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
                    <div className="grid gap-10 md:grid-cols-3">
                        {/* Brand */}
                        <div className="space-y-4">
                            <div className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                                Consultancy
                                <span className="text-blue-600 dark:text-blue-400">Pro</span>
                            </div>

                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
                                Helping students, professionals and founders make clear, confident
                                decisions about their next move.
                            </p>

                            {/* socials */}
                            <div className="flex items-center gap-4 pt-2">
                                <a
                                    href="#"
                                    className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                </a>
                                <a
                                    href="mailto:hello@consultancypro.in"
                                    className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
                                >
                                    <Mail className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-50">
                                Navigation
                            </h4>

                            <div className="grid grid-cols-2 gap-3 text-sm">
                                {[
                                    ["Services", "/services"],
                                    ["About", "/about"],
                                    ["Contact", "/contact"],
                                    ["Pricing", "/pricing"],
                                ].map(([label, link]) => (
                                    <a
                                        key={label}
                                        href={link}
                                        className="group flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                    >
                                        {label}
                                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="space-y-4 md:text-right">
                            <h4 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-50">
                                Let’s talk
                            </h4>

                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Prefer WhatsApp or email? Tell us your situation — we’ll guide your
                                next steps.
                            </p>

                            <div className="space-y-2 text-slate-900 dark:text-slate-100 font-medium">
                                <a
                                    href="mailto:hello@consultancypro.in"
                                    className="flex md:justify-end items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                >
                                    <Mail className="h-4 w-4" />
                                    hello@consultancypro.in
                                </a>

                                <a
                                    href="#"
                                    className="flex md:justify-end items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                >
                                    <Phone className="h-4 w-4" />
                                    +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* bottom line */}
                    <div className="mt-10 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-center">
                        <p className="text-xs text-slate-500 dark:text-slate-500 tracking-wide">
                            © {new Date().getFullYear()} Consultancy Services. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Floating Back-to-top button */}
            {showBackToTop && (
                <button
                    onClick={handleBackToTop}
                    aria-label="Back to top"
                    className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-40 group rounded-full border border-slate-300/70 dark:border-slate-700/80 bg-white/90 dark:bg-slate-900/95 px-3 py-3 shadow-lg shadow-slate-900/20 backdrop-blur-md flex items-center gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-400/80 transition-all duration-300 hover:shadow-blue-500/25 hover:-translate-y-0.5"
                >
                    <ArrowUp className="w-4 h-4 md:w-4 md:h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <span className="hidden sm:inline font-medium">Back to top</span>
                </button>
            )}
        </>
    );
}
