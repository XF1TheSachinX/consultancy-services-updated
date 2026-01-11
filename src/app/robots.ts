import { MetadataRoute } from "next";

const siteUrl = "https://YOUR-VERCEL-URL.vercel.app";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}