"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYouPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="mb-8"
                >
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-4xl mb-6">
                        ✓
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Registration Successful!
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Thank you for registering. We've received your details and will contact you within 24 hours to schedule your free strategy session.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 mb-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        What Happens Next?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">1</div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Confirmation Email</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Check your email for session details</p>
                        </div>
                        <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">2</div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pre-Session Prep</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Complete a quick questionnaire</p>
                        </div>
                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Strategy Session</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">45-min personalized consultation</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition hover:scale-105"
                    >
                        Return to Home
                    </Link>
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                    >
                        Explore Services
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}