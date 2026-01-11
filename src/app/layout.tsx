import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

// Your consistent production URL
const APP_URL = "https://consultancy-sachin.vercel.app";

export const metadata: Metadata = {
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
                url: "/og-image.png", // This will resolve to https://consultancy-sachin.vercel.app/og-image.png
                width: 1200,
                height: 630,
                alt: "Consultancy Services Preview",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Consultancy Services",
        description: "Modern consultancy for career, education and business clarity.",
        images: ["/og-image.png"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png", // Optional but recommended
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