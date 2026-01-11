import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore our consultancy services for career guidance, education, and business strategy.",
};

export default function ServicesPage() {
    return (
        <main className="max-w-5xl mx-auto pt-28 px-6 pb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl shadow-sm border bg-gray-50">
                    <h2 className="text-xl font-semibold mb-2">Career Guidance</h2>
                    <p className="text-gray-700">
                        1:1 sessions to help you choose the right path, switch careers, or
                        plan your next moves.
                    </p>
                </div>

                <div className="p-6 rounded-xl shadow-sm border bg-gray-50">
                    <h2 className="text-xl font-semibold mb-2">Education Planning</h2>
                    <p className="text-gray-700">
                        College and course selection, entrance exam strategy, scholarships
                        and more.
                    </p>
                </div>

                <div className="p-6 rounded-xl shadow-sm border bg-gray-50">
                    <h2 className="text-xl font-semibold mb-2">Business Strategy</h2>
                    <p className="text-gray-700">
                        Support for entrepreneurs and small businesses on strategy, systems
                        and growth.
                    </p>
                </div>
            </div>
        </main>
    );
}