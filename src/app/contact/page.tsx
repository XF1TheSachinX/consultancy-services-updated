"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle, Navigation } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage("Please fill in all required fields");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            // TODO: Replace with your Spring Boot API endpoint
            const SPRING_BOOT_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

            const response = await fetch(`${SPRING_BOOT_API_URL}/contact/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Map to your Spring Boot entity structure
                    fullName: formData.name,
                    email: formData.email,
                    phoneNumber: formData.phone,
                    inquiryType: formData.subject,
                    message: formData.message,
                    submittedAt: new Date().toISOString()
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Success - adjust based on your API response structure
            setStatus("success");

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus("error");
            setErrorMessage('Failed to send message. Please try again or contact us directly.');
        }
    };

    // White House coordinates
    const whiteHouseCoords = { lat: 38.8977, lng: -77.0365 };
    const mapUrl = `https://maps.google.com/maps?q=${whiteHouseCoords.lat},${whiteHouseCoords.lng}&z=15&output=embed`;

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white dark:from-slate-900 dark:to-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Get In Touch
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Let's Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Career Journey</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Reach out for personalized guidance, consultation bookings, or any questions about our services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Contact Information & Map */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-100 dark:border-slate-700">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email Address</h3>
                                        <p className="text-slate-600 dark:text-slate-400">support@careerconsult.com</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Typically replies within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                        <Phone className="w-6 h-6 text-green-600 dark:text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Phone Number</h3>
                                        <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Mon-Fri, 9AM-6PM EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                        <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Office Location</h3>
                                        <p className="text-slate-600 dark:text-slate-400">1600 Pennsylvania Avenue NW</p>
                                        <p className="text-slate-600 dark:text-slate-400">Washington, DC 20500</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                        <Clock className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Working Hours</h3>
                                        <p className="text-slate-600 dark:text-slate-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-slate-600 dark:text-slate-400">Saturday: 10:00 AM - 2:00 PM</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-700">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">24h</div>
                                        <div className="text-xs text-slate-600 dark:text-slate-400">Avg Response</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600">98%</div>
                                        <div className="text-xs text-slate-600 dark:text-slate-400">Satisfaction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">500+</div>
                                        <div className="text-xs text-slate-600 dark:text-slate-400">Students Helped</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Navigation className="w-5 h-5 text-blue-600" />
                                    <h3 className="font-semibold text-slate-900 dark:text-white">Visit Our Office</h3>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                    Located in the heart of Washington DC. Feel free to visit during working hours.
                                </p>
                            </div>
                            <div className="h-64 relative">
                                {/* Embedded Google Map */}
                                <iframe
                                    src={mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location Map"
                                    className="absolute inset-0"
                                />
                                {/* Map Overlay */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/10 to-transparent" />
                            </div>
                            <div className="p-6 pt-4">
                                <a
                                    href="https://maps.google.com/?q=1600+Pennsylvania+Avenue+NW,Washington,DC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <Navigation className="w-4 h-4" />
                                    Get Directions
                                </a>
                            </div>
                        </div>

                        {/* Status Messages */}
                        {status === "success" && (
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500" />
                                    <div>
                                        <h3 className="font-semibold text-green-900 dark:text-green-300">Message Sent Successfully!</h3>
                                        <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                                            Thank you for contacting us. We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center">
                                        <span className="text-white text-xs">!</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-red-900 dark:text-red-300">Submission Failed</h3>
                                        <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                                            {errorMessage}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100 dark:border-slate-700 h-full">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                    Send Us a Message
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                        placeholder="Enter your full name"
                                        disabled={status === "loading"}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                            placeholder="your@email.com"
                                            disabled={status === "loading"}
                                        />
                                    </div>

                                    {/* Phone Field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                            placeholder="+1 (555) 000-0000"
                                            disabled={status === "loading"}
                                        />
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700 dark:text-slate-300"
                                        required
                                        disabled={status === "loading"}
                                    >
                                        <option value="" disabled>Select a subject</option>
                                        <option value="consultation">Book a Consultation</option>
                                        <option value="pricing">Pricing Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="general">General Question</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                        placeholder="Tell us about your academic/career goals, specific questions, or how we can help..."
                                        disabled={status === "loading"}
                                        maxLength={1000}
                                    />
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-xs text-slate-500">{formData.message.length}/1000 characters</span>
                                        <span className="text-xs text-slate-500">* Required field</span>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="group w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>

                                {/* Privacy Note */}
                                <p className="text-center text-xs text-slate-500 dark:text-slate-500">
                                    By submitting this form, you agree to our{" "}
                                    <button type="button" className="text-blue-600 dark:text-blue-500 hover:underline">
                                        Privacy Policy
                                    </button>
                                    . We respect your data and never share it with third parties.
                                </p>
                            </form>

                            {/* Alternative Contact */}
                            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-700">
                                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                                    Prefer to email directly? Write to us at{" "}
                                    <a href="mailto:support@careerconsult.com" className="text-blue-600 dark:text-blue-500 font-medium hover:underline">
                                        support@careerconsult.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}