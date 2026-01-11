"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const preferredDomains = [
    "Engineering",
    "Medical",
    "Commerce",
    "Arts & Humanities",
    "Science",
    "Law",
    "Management",
    "Architecture",
    "Design",
    "Hotel Management",
    "Agriculture",
    "Pharmacy",
];

const targetOutcomes = [
    "Get into Top College",
    "Choose Right Career Path",
    "Improve Academic Performance",
    "Study Abroad Planning",
    "Career Change Guidance",
    "Overall Career Counseling",
];

const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
];

const citiesByState: Record<string, string[]> = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Nellore"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun"],
    Assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba"],
    Goa: ["Panaji", "Margao", "Vasco da Gama"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala"],
    "Himachal Pradesh": ["Shimla", "Dharamshala", "Solan"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad"],
    Manipur: ["Imphal"],
    Meghalaya: ["Shillong"],
    Mizoram: ["Aizawl"],
    Nagaland: ["Kohima", "Dimapur"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
    Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
    Sikkim: ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
    Tripura: ["Agartala"],
    "Uttar Pradesh": [
        "Lucknow",
        "Noida",
        "Ghaziabad",
        "Kanpur",
        "Varanasi",
        "Agra",
        "Prayagraj",
    ],
    Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh", "Haldwani"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
    "Andaman and Nicobar Islands": ["Port Blair"],
    Chandigarh: ["Chandigarh"],
    "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Silvassa"],
    Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket"],
    "Jammu and Kashmir": ["Srinagar", "Jammu"],
    Ladakh: ["Leh", "Kargil"],
    Lakshadweep: ["Kavaratti"],
    Puducherry: ["Puducherry", "Karaikal"],
};

export default function RegisterPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        city: "",
        state: "",
        currentClass: "",
        preferredDomain: "",
        targetOutcome: "",
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        if (name === "state") {
            setFormData((prev) => ({
                ...prev,
                state: value,
                city: "",
            }));
            return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("Form submitted:", formData);
        router.push("/thank-you");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 14, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 14 },
        },
    };

    const floatingIcon = {
        y: [0, -6, 0],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    };

    const availableCities =
        (formData.state && citiesByState[formData.state]) || [];

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 pt-20 pb-10 px-4 sm:px-6">
            <div className="max-w-xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 110, damping: 18 }}
                    className="text-center mb-6"
                >
                    <motion.div
                        animate={floatingIcon}
                        className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/40"
                    >
                        <span className="text-2xl text-white">📋</span>
                    </motion.div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                        Book Free Consultation
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-xs sm:text-sm">
                        Share a few details and we&apos;ll plan a personalized 1:1 strategy
                        session for you.
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 18 }}
                    className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-200 dark:border-slate-800 p-5 sm:p-6"
                >
                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* First & Last Name */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <motion.div variants={itemVariants} className="space-y-1.5">
                                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-0.5">
                                    First Name *
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-3.5 py-3 pl-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-900 text-sm"
                                        placeholder="First name"
                                    />
                                    <span className="absolute left-3 text-slate-400 dark:text-slate-500 text-sm top-2.5">
                    👤
                  </span>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-1.5">
                                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-0.5">
                                    Last Name *
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-3.5 py-3 pl-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-900 text-sm"
                                        placeholder="Last name"
                                    />
                                    <span className="absolute left-3 text-slate-400 dark:text-slate-500 text-sm top-2.5">
                    🙂
                  </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Phone */}
                        <motion.div variants={itemVariants} className="space-y-1.5">
                            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-0.5">
                                WhatsApp Number *
                            </label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-3.5 py-3 pl-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-900 text-sm"
                                    placeholder="+91 98765 43210"
                                />
                                <span className="absolute left-3 text-slate-400 dark:text-slate-500 text-sm top-2.5">
                  📱
                </span>
                            </div>
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={itemVariants} className="space-y-1.5">
                            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-0.5">
                                Email Address *
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3.5 py-3 pl-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-900 text-sm"
                                    placeholder="your.email@example.com"
                                />
                                <span className="absolute left-3 text-slate-400 dark:text-slate-500 text-sm top-2.5">
                  ✉️
                </span>
                            </div>
                        </motion.div>

                        {/* State + City + Class */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            {/* State */}
                            <motion.div variants={itemVariants} className="space-y-1.5">
                                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-0.5">
                                    State *
                                </label>
                                <div className="relative">
                                    <select
                                        name="state"
                                        required
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="w-full px-3.5 py-3 pr-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 text-sm appearance-none"
                                    >
                                        <option value="" className="text-slate-400">
                                            Select state
                                        </option>
                                        {indianStates.map((state) => (
                                            <option key={state} value={state} className="text-slate-900 dark:text-slate-50">
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute left-3 text-slate-400 dark:text-slate-500 text-sm top-2.5">
                    🗺️
                  </span>
                                </div>
                            </motion.div>

                            {/* City */}
                            <motion.div variants={itemVariants} className="space-y-1.5">
                                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-0.5">
                                    City *
                                </label>
                                <div className="relative">
                                    <select
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        disabled={!formData.state}
                                        className={`w-full px-3.5 py-3 pr-8 rounded-xl border text-sm transition-all duration-200 appearance-none
                      ${
                                            formData.state
                                                ? "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:bg-white dark:focus:bg-slate-900"
                                                : "border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                                        }`}
                                    >
                                        <option value="" className="text-slate-400">
                                            {formData.state ? "Select city" : "Select state first"}
                                        </option>
                                        {availableCities.map((city) => (
                                            <option key={city} value={city} className="text-slate-900 dark:text-slate-50">
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute left-3 text-slate-400 dark:text-slate-500 text-sm top-2.5">
                    📍
                  </span>
                                </div>
                            </motion.div>

                            {/* Current Class */}
                            <motion.div variants={itemVariants} className="space-y-1.5">
                                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-0.5">
                                    Current Class *
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="currentClass"
                                        required
                                        value={formData.currentClass}
                                        onChange={handleInputChange}
                                        className="w-full px-3.5 py-3 pl-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-900 text-sm"
                                        placeholder="e.g., 12th, B.Tech"
                                    />
                                    <span className="absolute left-3 text-slate-400 dark:text-slate-500 text-sm top-2.5">
                    🎓
                  </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Preferred Domain */}
                        <motion.div variants={itemVariants} className="space-y-1.5">
                            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-0.5">
                                Preferred Domain (Optional)
                            </label>
                            <select
                                name="preferredDomain"
                                value={formData.preferredDomain}
                                onChange={handleInputChange}
                                className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 text-sm appearance-none"
                            >
                                <option value="" className="text-slate-400">
                                    Select your interest
                                </option>
                                {preferredDomains.map((domain) => (
                                    <option key={domain} value={domain} className="text-slate-900 dark:text-slate-50">
                                        {domain}
                                    </option>
                                ))}
                            </select>
                        </motion.div>

                        {/* Main Goal */}
                        <motion.div variants={itemVariants} className="space-y-1.5">
                            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-0.5">
                                Main Goal *
                            </label>
                            <select
                                name="targetOutcome"
                                required
                                value={formData.targetOutcome}
                                onChange={handleInputChange}
                                className="w-full px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 focus:bg-white dark:focus:bg-slate-900 text-sm appearance-none"
                            >
                                <option value="" className="text-slate-400">
                                    What&apos;s your main goal?
                                </option>
                                {targetOutcomes.map((outcome) => (
                                    <option key={outcome} value={outcome} className="text-slate-900 dark:text-slate-50">
                                        {outcome}
                                    </option>
                                ))}
                            </select>
                        </motion.div>

                        {/* Button */}
                        <motion.div variants={itemVariants} className="pt-1">
                            <motion.button
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                                    isSubmitting
                                        ? "bg-slate-400 cursor-not-allowed"
                                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/40 active:scale-95"
                                } text-white shadow-md shadow-blue-500/25`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                    />
                    Processing...
                  </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                    Book Free Session
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                                )}
                            </motion.button>

                            <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 mt-2.5">
                                We&apos;ll get back within 24 hours. No spam, no random calls.
                            </p>
                        </motion.div>
                    </motion.form>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="mt-6"
                >
                    <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                        {[
                            { icon: "⏱️", text: "45-min 1:1 Session" },
                            { icon: "🎯", text: "Clarity on Colleges" },
                            { icon: "💯", text: "Free Consultation" },
                            { icon: "📧", text: "24-hr Response" },
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 px-3 py-2 shadow-sm"
                            >
                                <span className="text-lg">{benefit.icon}</span>
                                <span className="text-slate-800 dark:text-slate-100">
                  {benefit.text}
                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-700 text-[11px] sm:text-xs text-emerald-700 dark:text-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        500+ students guided • 98% say they&apos;d recommend us
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
