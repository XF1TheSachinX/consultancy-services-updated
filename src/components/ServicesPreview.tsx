"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Career Guidance",
        desc: "Find the right path, change direction with confidence, or plan your next move step-by-step.",
        badge: "Students & Working Pros",
        icon: "🎯",
    },
    {
        title: "Education Planning",
        desc: "Shortlist colleges, exams and courses with a structured decision framework instead of confusion.",
        badge: "India & Global",
        icon: "🎓",
    },
    {
        title: "Business Strategy",
        desc: "Clarify your offers, positioning and roadmap so your small business feels like a real system.",
        badge: "Founders & Freelancers",
        icon: "📈",
    },
];

export default function ServicesPreview() {
    return (
        <section className="mt-12 md:mt-16">
            <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                        What we help you with
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Clear outcomes. No vague gyaan. Every session ends with a concrete plan.
                    </p>
                </div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ staggerChildren: 0.1 }}
                className="grid gap-5 md:grid-cols-3"
            >
                {services.map((service) => (
                    <motion.article
                        key={service.title}
                        variants={{
                            hidden: { opacity: 0, y: 12 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="group relative"
                    >
                        {/* gradient border */}
                        <div className="rounded-2xl bg-gradient-to-br from-slate-200/80 via-slate-100/40 to-slate-200/10 dark:from-slate-700/60 dark:via-slate-800/40 dark:to-slate-900/40 p-[1px]">
                            <div className="h-full rounded-2xl bg-white/90 dark:bg-slate-950/80 shadow-sm group-hover:shadow-xl transition-shadow duration-200">
                                <div className="p-4 md:p-5 flex flex-col gap-3">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="inline-flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-lg md:text-xl text-blue-600 dark:bg-blue-950/70 dark:text-blue-300 shadow-sm">
                        {service.icon}
                      </span>
                                            <h3 className="text-base md:text-lg font-semibold leading-snug">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <span className="rounded-full bg-slate-100 text-[10px] font-medium px-2 py-1 text-slate-600 uppercase tracking-wide dark:bg-slate-900/80 dark:text-slate-300">
                      {service.badge}
                    </span>
                                    </div>

                                    <p className="text-sm text-slate-600 dark:text-slate-300">
                                        {service.desc}
                                    </p>

                                    <button className="mt-1 inline-flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                                        Learn more
                                        <span className="ml-1 text-sm group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* soft glow on hover */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-blue-500/0 group-hover:bg-blue-500/5 blur-2xl" />
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}