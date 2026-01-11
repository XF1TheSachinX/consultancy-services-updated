import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch to book a consultation or ask anything about our services.",
};

export default function ContactPage() {
    return (
        <main className="max-w-3xl mx-auto pt-28 px-6 pb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-700 mb-8">
                Fill this form (static for now) or reach out directly via email.
            </p>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <textarea
                        className="w-full border rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us what you need help with"
                    />
                </div>

                <button
                    type="button"
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </main>
    );
}