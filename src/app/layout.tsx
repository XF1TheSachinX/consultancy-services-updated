import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Consultancy Services",
        template: "%s | Consultancy Services"
    },
    description: "A modern SEO-optimized website built with Next.js.",
    keywords: [
        "consultancy",
        "services",
        "nextjs",
        "seo",
        "modern web",
        "typescript"
    ],
    openGraph: {
        title: "Consultancy Services",
        description: "A modern SEO-optimized website built with Next.js.",
        url: "https://your-vercel-domain.com",
        siteName: "Consultancy Services",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Consultancy Services",
        description: "A modern SEO-optimized website built with Next.js.",
        images: ["/og-image.png"]
    },
    icons: {
        icon: "/favicon.ico"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}