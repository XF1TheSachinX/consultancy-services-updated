"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="w-full py-4 bg-white border-b border-gray-200 fixed top-0 left-0 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
                <Link href="/" className="text-xl font-bold text-gray-900">
                    Consultancy Services
                </Link>

                <nav className="space-x-6 text-gray-700 font-medium">
                    {links.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname?.startsWith(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    "hover:text-blue-600 transition " +
                                    (isActive ? "text-blue-600" : "")
                                }
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}