export default function Footer() {
    return (
        <footer className="border-t border-slate-200/70 dark:border-slate-800/70 bg-white dark:bg-slate-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10">
                <div className="grid gap-6 md:grid-cols-3 items-start">
                    {/* Brand + tagline */}
                    <div className="space-y-3">
                        <div className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                            Consultancy<span className="text-blue-600 dark:text-blue-400">Pro</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Helping students, professionals and founders make clear, confident
                            decisions about their next move.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="space-y-3 text-sm">
                        <div className="font-semibold text-slate-900 dark:text-slate-50">
                            Quick links
                        </div>
                        <div className="flex flex-wrap gap-3 text-slate-600 dark:text-slate-400">
                            <a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">
                                Services
                            </a>
                            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                                About
                            </a>
                            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3 text-sm md:text-right">
                        <div className="font-semibold text-slate-900 dark:text-slate-50">
                            Let&apos;s talk
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">
                            Prefer WhatsApp or email? Reach out with your situation, and we&apos;ll
                            suggest the right next step.
                        </p>
                        <p className="text-slate-900 dark:text-slate-100 font-medium">
                            hello@consultancypro.in
                        </p>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-slate-800/70 text-xs text-center text-slate-500 dark:text-slate-500">
                    © {new Date().getFullYear()} Consultancy Services. All rights reserved.
                </div>
            </div>
        </footer>
    );
}