import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

// For local testing; on Vercel it's still fine because the image is relative
const APP_URL = "http://localhost:3000";

export const metadata: Metadata = {
    // 🟢 Keep it simple, like your working example
    title: "Consultancy Services",
    description:
        "Career guidance, education planning, and business strategy services designed to bring clarity and confidence to your next steps.",
    metadataBase: new URL(APP_URL),

    openGraph: {
        title: "Consultancy Services",
        description:
            "Modern consultancy for career, education and business clarity.",
        url: APP_URL,
        siteName: "Consultancy Services",
        images: [
            {
                url: "/og-image.png", // relative -> works locally + on Vercel
                width: 1200,
                height: 630,
                alt: "Consultancy Services Preview",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        images: ["/og-image.png"],
    },

    icons: {
        icon: "/favicon.ico",
    },
};

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
}