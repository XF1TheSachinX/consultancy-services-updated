import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

// your exact Vercel URL (no trailing slash)
/*const siteUrl =
    "https://consultancy-services-updated-qm7pekjre-xf1thesachinxs-projects.vercel.app";*/

const APP_URL = "http://localhost:3000";


export const metadata: Metadata = {
    metadataBase: new URL(APP_URL),

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
        url: APP_URL,
        siteName: "Consultancy Services",
        images: [
            {
                url: "/og-image.png",          // ABSOLUTE URL
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
        images: ["/og-image.png"],         // ABSOLUTE URL
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