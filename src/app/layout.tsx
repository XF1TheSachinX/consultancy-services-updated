import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
    "https://consultancy-services-updated-154pgqwph-xf11thesachinxs-projects.vercel.app"; // your URL

export const metadata: Metadata = {
    title: {
        default: "Consultancy Services",
        template: "%s | Consultancy Services",
    },
    description:
        "Modern consultancy services for career, education, and business growth. Built with Next.js, Tailwind CSS and optimized for SEO.",
    metadataBase: new URL(siteUrl),
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider>
            {/* Theme-aware wrapper */}
            <div className="bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-slate-50 min-h-screen transition-colors duration-300">
                <Header />
                <div className="pt-20 min-h-[calc(100vh-80px)]">{children}</div>
                <Footer />
                <WhatsAppButton />
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}