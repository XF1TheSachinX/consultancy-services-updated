import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";

export default function Home() {
    return (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
            <Hero />
            <ServicesPreview />
        </main>
    );
}
