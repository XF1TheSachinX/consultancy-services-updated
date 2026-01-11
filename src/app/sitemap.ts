import { MetadataRoute } from "next";

const siteUrl = "https://YOUR-VERCEL-URL.vercel.app"; // same as layout

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        {
            url: siteUrl,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/services`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/contact`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}