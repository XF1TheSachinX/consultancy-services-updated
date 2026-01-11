import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

// FIX 1: Get the actual Vercel URL dynamically
const APP_URL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// FIX 2: Make sure og-image.png exists in public folder
// Run: ls public/ to check if og-image.png exists

export const metadata: Metadata = {
    title: "Consultancy Services",
    description:
        "Career guidance, education planning, and business strategy services designed to bring clarity and confidence to your next steps.",
    metadataBase: new URL(APP_URL), // This is correct
    openGraph: {
        title: "Consultancy Services",
        description:
            "Modern consultancy for career, education and business clarity.",
        url: APP_URL,
        siteName: "Consultancy Services",
        images: [
            {
                // FIX 3: Make sure this image exists
                url: "/og-image.png", // This is correct - metadataBase handles it
                width: 1200,
                height: 630,
                alt: "Consultancy Services Preview",
            },
        ],
        type: "website",
        // FIX 4: Add locale (optional but good practice)
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        // FIX 5: Use same image path
        images: ["/og-image.png"],
    },
    // REMOVE OR KEEP icons? Let's keep it simple like working code
    icons: {
        icon: "/favicon.ico",
    },
};

/*
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-slate-50 transition-colors`}
        >
        <ThemeProviderWrapper>
            <Header />
            <div className="pt-20 min-h-[calc(100vh-80px)]">{children}</div>
            <Footer />
        </ThemeProviderWrapper>
        </body>
        </html>
    );
}*/

// Test with minimal version (temporarily)
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <h1>Test OG Image</h1>
        {/* Test if image loads */}
        <img src="/og-image.png" alt="Test OG" style={{maxWidth: '300px'}} />
        {children}
        </body>
        </html>
    );
}