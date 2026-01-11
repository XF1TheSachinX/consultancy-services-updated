/*
import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

// your exact Vercel URL (no trailing slash)
const siteUrl =
    "https://consultancy-services-updated-qm7pekjre-xf1thesachinxs-projects.vercel.app";

const ogImageUrl = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default: "Consultancy Services",
        template: "%s | Consultancy Services",
    },

    description:
        "Career guidance, education planning, and business strategy services designed to bring clarity and confidence to your next steps.",

    openGraph: {
        title: "Consultancy Services",
        description:
            "Modern consultancy for career, education and business clarity.",
        url: siteUrl,
        siteName: "Consultancy Services",
        images: [
            {
                url: ogImageUrl,          // ABSOLUTE URL
                width: 1200,
                height: 630,
                alt: "Consultancy Services Preview",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Consultancy Services",
        description:
            "Career guidance, education planning and business strategy.",
        images: [ogImageUrl],         // ABSOLUTE URL
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
}*/

import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

// 🔹 NO hardcoded siteUrl, NO metadataBase, ONLY relative image paths
export const metadata: Metadata = {
    title: {
        default: "Consultancy Services",
        template: "%s | Consultancy Services",
    },

    description:
        "Career guidance, education planning, and business strategy services designed to bring clarity and confidence to your next steps.",

    openGraph: {
        title: "Consultancy Services",
        description:
            "Modern consultancy for career, education and business clarity.",
        // url omitted so it works fine on localhost + any Vercel URL
        siteName: "Consultancy Services",
        images: [
            {
                url: "/og-image.png", // ✅ relative path works locally + on Vercel
                width: 1200,
                height: 630,
                alt: "Consultancy Services Preview",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Consultancy Services",
        description:
            "Career guidance, education planning and business strategy.",
        images: ["/og-image.png"], // ✅ relative again
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