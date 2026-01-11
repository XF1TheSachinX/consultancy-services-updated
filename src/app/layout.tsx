import type { Metadata } from "next";
import "./globals.css";
// If your project already uses a font like Inter, keep that:
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://YOUR-VERCEL-URL.vercel.app"; // <-- update this

export const metadata: Metadata = {
    title: {
        default: "Consultancy Services",
        template: "%s | Consultancy Services",
    },
    description:
        "Modern consultancy services for career, education, and business growth. Built with Next.js, Tailwind CSS and optimized for SEO.",
    keywords: [
        "consultancy",
        "career guidance",
        "education consultancy",
        "business consulting",
        "Next.js",
        "SEO",
    ],
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        title: "Consultancy Services",
        description:
            "Get expert guidance for your career, education and business. Modern consultancy website built with Next.js.",
        url: siteUrl,
        siteName: "Consultancy Services",
        images: [
            {
                url: "/og-image.png", // create later or change
                width: 1200,
                height: 630,
                alt: "Consultancy Services",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Consultancy Services",
        description:
            "Modern consultancy services for career, education, and business growth.",
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
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}