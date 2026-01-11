"use client";

import { useState, useEffect } from "react";

const services = [
    {
        id: 1,
        title: "Career Guidance",
        description:
            "1:1 AI-powered sessions to map your skills, discover hidden opportunities, and create a personalized career roadmap with predictive analytics.",
        icon: "🚀",
        gradient: "bg-gradient-to-r from-blue-500 to-cyan-400",
        features: [
            "AI Career Path Matching",
            "Skill Gap Analysis",
            "Industry Trend Forecasting",
            "Personalized Roadmapping",
        ],
        delay: 0,
    },
    {
        id: 2,
        title: "Education Planning",
        description:
            "Smart education planning with predictive algorithms, virtual campus tours, and scholarship optimization using blockchain verification.",
        icon: "🎓",
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
        features: [
            "AI-Powered Course Matching",
            "Virtual Reality Campus Tours",
            "Scholarship Blockchain",
            "Global University Network",
        ],
        delay: 100,
    },
    {
        id: 3,
        title: "Business Strategy",
        description:
            "Next-gen business solutions featuring AI market analysis, automated growth systems, and blockchain-based strategic frameworks.",
        icon: "💼",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500",
        features: [
            "AI Market Intelligence",
            "Automated Growth Systems",
            "Blockchain Strategy",
            "Real-time Analytics Dashboard",
        ],
        delay: 200,
    },
];

export default function ServicesPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className="relative overflow-hidden min-h-screen">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 px-6 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Animated Title */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Our Services
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Futuristic consultancy solutions powered by AI, blockchain, and
                            predictive analytics for the next generation of professionals.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid lg:grid-cols-3 gap-8 relative">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`group transition-all duration-500 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }`}
                                style={{
                                    transitionDelay: `${index * 200}ms`,
                                }}
                            >
                                {/* Glass Morphism Card */}
                                <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 border border-white/30 dark:border-gray-700/30 shadow-2xl backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2">
                                    {/* Icon with Animated Gradient */}
                                    <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8">
                                        <div
                                            className={`absolute inset-0 ${service.gradient} rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110`}
                                        />
                                        <div className="relative w-full h-full flex items-center justify-center text-3xl md:text-4xl bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 group-hover:scale-105 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 text-center leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group/feature"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover/feature:scale-150 transition-transform duration-300" />
                                                <span className="text-sm md:text-base group-hover/feature:translate-x-2 transition-transform duration-300">
                          {feature}
                        </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Animated Border */}
                                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-gray-700/10 to-transparent"
                                             style={{
                                                 backgroundSize: '200% 100%',
                                                 animation: 'shimmer 2s infinite linear'
                                             }} />
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-8 text-center relative z-10">
                                        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Features Section */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        How It Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                step: "01",
                                title: "AI Assessment",
                                desc: "Complete our smart assessment powered by GPT-4",
                                color: "bg-gradient-to-r from-blue-500 to-cyan-500",
                            },
                            {
                                step: "02",
                                title: "Data Analysis",
                                desc: "We analyze trends with machine learning algorithms",
                                color: "bg-gradient-to-r from-purple-500 to-pink-500",
                            },
                            {
                                step: "03",
                                title: "Strategy Creation",
                                desc: "Personalized roadmap using predictive modeling",
                                color: "bg-gradient-to-r from-orange-500 to-amber-500",
                            },
                            {
                                step: "04",
                                title: "Continuous Optimization",
                                desc: "Real-time adjustments with live analytics",
                                color: "bg-gradient-to-r from-green-500 to-emerald-500",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className={`relative group cursor-pointer transition-all duration-500 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }`}
                                style={{ transitionDelay: `${idx * 200 + 600}ms` }}
                            >
                                <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm border border-white/10 dark:border-gray-700/10 hover:bg-white/10 dark:hover:bg-gray-800/10 transition-all duration-500 hover:scale-[1.02]">
                                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200/20 dark:text-gray-800/20 absolute -top-2 md:-top-4 right-4 group-hover:opacity-30 transition-all duration-500">
                                        {item.step}
                                    </div>
                                    <div className="relative z-10">
                                        <div
                                            className={`w-12 h-12 rounded-xl ${item.color} mb-4 flex items-center justify-center text-white text-xl font-bold`}
                                        >
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-75 animate-pulse" />
                        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready for the Future?
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto">
                                Join 500+ professionals who transformed their careers with our
                                next-generation consultancy.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-bold text-base md:text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30">
                                    Start Free Assessment
                                </button>
                                <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-white/20 rounded-xl text-white font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                    Book Virtual Tour
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "500+", label: "Clients Transformed", color: "text-blue-500" },
                            { value: "98%", label: "Satisfaction Rate", color: "text-green-500" },
                            { value: "24/7", label: "AI Support", color: "text-purple-500" },
                            { value: "50+", label: "Countries", color: "text-amber-500" },
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="text-center group"
                            >
                                <div
                                    className={`text-4xl md:text-5xl lg:text-6xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add CSS animation for shimmer effect */}
            <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
        </main>
    );
}