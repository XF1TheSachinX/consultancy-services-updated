import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn more about our consultancy services, mission, and approach.",
};

export default function AboutPage() {
    return (
        <main className="max-w-4xl mx-auto pt-28 px-6 pb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
                We provide modern, data-driven consultancy services for students,
                professionals, and businesses. Our goal is to simplify complex choices
                and help you move with clarity and confidence.
            </p>
        </main>
    );
}