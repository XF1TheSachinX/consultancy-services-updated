"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="pt-4 pb-16">
            <div className="relative">
                {/* soft floating blobs */}
                <motion.div
                    className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <motion.div
                    className="pointer-events-none absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />

                    <div className="relative px-6 py-10 sm:px-10 sm:py-14 flex flex-col md:flex-row items-center gap-8">
                        <div className="max-w-xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 mb-3">
                                MODERN CONSULTANCY
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                                Clarity for{" "}
                                <span className="font-extrabold">careers, colleges & growth.</span>
                            </h1>
                            <p className="text-base sm:text-lg text-blue-100/90 max-w-lg mb-6">
                                Structured 1:1 guidance to move from confusion to a clear plan — for
                                students, working professionals and small businesses.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-blue-700 font-semibold shadow-md hover:shadow-lg hover:-translate-y-[1px] transition"
                                >
                                    Book a Free Call
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-blue-100/80 bg-white/10 text-white font-medium hover:bg-white/15 transition"
                                >
                                    View Services
                                </Link>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                            className="w-full md:w-72 lg:w-80"
                        >
                            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/25 p-5 shadow-lg">
                                <p className="text-sm text-blue-100 mb-2">
                                    NEXT AVAILABLE SLOT
                                </p>
                                <p className="text-xl font-semibold mb-1">
                                    1:1 Strategy Session
                                </p>
                                <p className="text-sm text-blue-100 mb-4">
                                    A focused 45-minute call to map your options and next steps.
                                </p>
                                <div className="flex justify-between text-xs text-blue-100/90">
                  <span>
                    Slots this week: <strong>3</strong>
                  </span>
                                    <span>
                    Mode: <strong>Online</strong>
                  </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}