"use client";

import { motion } from "framer-motion";
import {
    Star,
    Quote,
    CheckCircle,
    ChevronRight,
    ChevronLeft,
    Play,
    Pause,
} from "lucide-react";
import {
    useState,
    useEffect,
    useRef,
    useCallback,
    type ReactNode,
} from "react";

const reviews = [
    {
        id: 1,
        name: "Priya Sharma",
        course: "MBA, IIM Ahmedabad",
        review:
            "The structured approach helped me secure admission to my dream college. The step-by-step planning was invaluable.",
        rating: 5,
        initials: "PS",
        image: "/avatars/priya.jpg",
    },
    {
        id: 2,
        name: "David Chen",
        course: "Medicine, Harvard",
        review:
            "Outstanding mentorship! They helped me balance academic excellence with extracurricular development.",
        rating: 5,
        initials: "DC",
        image: "/avatars/david.jpg",
    },
    {
        id: 3,
        name: "Sophia Williams",
        course: "Engineering, MIT",
        review:
            "The personalized roadmap made all the difference. I achieved everything I set out to accomplish and more.",
        rating: 5,
        initials: "SW",
        image: "/avatars/sophia.jpg",
    },
    {
        id: 4,
        name: "Alex Johnson",
        course: "Computer Science, Stanford",
        review:
            "The guidance completely transformed my career path. I went from confused to confident with a clear 5-year plan!",
        rating: 5,
        initials: "AJ",
        image: "/avatars/alex.jpg",
    },
    {
        id: 5,
        name: "Rahul Mehta",
        course: "Law, NLSIU Bangalore",
        review:
            "From career confusion to crystal clarity. The strategic planning sessions were game-changing.",
        rating: 5,
        initials: "RM",
        image: "/avatars/rahul.jpg",
    },
    {
        id: 6,
        name: "Maria Garcia",
        course: "Economics, Cambridge",
        review:
            "Exceptional guidance that helped me navigate the complex application process with ease.",
        rating: 5,
        initials: "MG",
        image: "/avatars/maria.jpg",
    },
];

// Reusable ripple button for controls
function ControlButton({
                           onClick,
                           ariaLabel,
                           className = "",
                           children,
                       }: {
    onClick?: () => void;
    ariaLabel: string;
    className?: string;
    children: ReactNode;
}) {
    const [ripples, setRipples] = useState<number[]>([]);

    const handleClick = () => {
        const id = Date.now();
        setRipples((prev) => [...prev, id]);
        onClick?.();
    };

    return (
        <motion.button
            type="button"
            aria-label={ariaLabel}
            onClick={handleClick}
            className={`relative overflow-hidden rounded-full p-2 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 ${className}`}
            whileTap={{ scale: 0.9 }}
        >
            {ripples.map((id) => (
                <motion.span
                    key={id}
                    className="pointer-events-none absolute inset-0 rounded-full bg-white/35 dark:bg-slate-300/25"
                    initial={{ scale: 0, opacity: 0.7 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    onAnimationComplete={() =>
                        setRipples((prev) => prev.filter((rId) => rId !== id))
                    }
                />
            ))}
            <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
        </motion.button>
    );
}

function Avatar({ src, initials }: { src?: string; initials: string }) {
    const [imgError, setImgError] = useState(false);

    const avatarSizeBase = "w-[120px] h-[120px]";
    const avatarSizeMd = "md:w-[140px] md:h-[140px]";

    if (!src || imgError) {
        return (
            <div className="relative">
                <div
                    className={`${avatarSizeBase} ${avatarSizeMd} rounded-full border-4 border-white dark:border-slate-800 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg`}
                >
          <span className="text-2xl md:text-3xl font-semibold text-white">
            {initials}
          </span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800 shadow-md">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <div
                className={`${avatarSizeBase} ${avatarSizeMd} rounded-full border-4 border-white dark:border-slate-800 overflow-hidden shadow-lg`}
            >
                <img
                    src={src}
                    alt={`${initials} avatar`}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                />
            </div>
            <div className="absolute -bottom-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800 shadow-md">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
        </div>
    );
}

export default function StudentReviews() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [clickDirection, setClickDirection] = useState<"left" | "right" | null>(
        null
    );
    const animationRef = useRef<number>();

    // Card dimensions
    const cardWidth = 320;
    const gap = 24;
    const totalCardWidth = cardWidth + gap;
    const speed = 0.5;

    const extendedReviews = [...reviews, ...reviews];
    const loopWidth = totalCardWidth * reviews.length;

    const normalizeTranslate = (value: number) => {
        let v = value;
        while (v > 0) v -= loopWidth;
        while (v <= -loopWidth) v += loopWidth;
        return v;
    };

    const animateCarousel = useCallback(() => {
        setCurrentTranslate((prevRaw) => {
            if (!isPlaying || isHovered) return prevRaw;

            const prev = normalizeTranslate(prevRaw);
            let next = prev - speed;
            next = normalizeTranslate(next);
            return next;
        });

        animationRef.current = requestAnimationFrame(animateCarousel);
    }, [isPlaying, isHovered, loopWidth]);

    const moveLeft = () => {
        setCurrentTranslate((prev) => {
            const normalized = normalizeTranslate(prev);
            const next = normalized + totalCardWidth;
            return normalizeTranslate(next);
        });
        setClickDirection("left");
    };

    const moveRight = () => {
        setCurrentTranslate((prev) => {
            const normalized = normalizeTranslate(prev);
            const next = normalized - totalCardWidth;
            return normalizeTranslate(next);
        });
        setClickDirection("right");
    };

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
        setClickDirection(null);
    };

    const handleCarouselHover = (hovering: boolean) => {
        setIsHovered(hovering);
    };

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animateCarousel);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [animateCarousel]);

    return (
        <section className="py-16 md:py-20 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Verified Reviews
              </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Student Success Stories
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Hear from students who transformed their academic and career
                            journeys
                        </p>
                    </motion.div>
                </div>

                {/* Carousel + Controls */}
                <div className="relative">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <ControlButton
                            onClick={moveLeft}
                            ariaLabel="Previous"
                            className="bg-white dark:bg-slate-800"
                        >
                            <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        </ControlButton>

                        <ControlButton
                            onClick={togglePlayPause}
                            ariaLabel={isPlaying ? "Pause" : "Play"}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                        >
                            {isPlaying ? (
                                <Pause className="w-5 h-5" />
                            ) : (
                                <Play className="w-5 h-5" />
                            )}
                        </ControlButton>

                        <ControlButton
                            onClick={moveRight}
                            ariaLabel="Next"
                            className="bg-white dark:bg-slate-800"
                        >
                            <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        </ControlButton>
                    </div>

                    {/* Carousel container */}
                    <div
                        className="relative overflow-hidden py-8"
                        onMouseEnter={() => handleCarouselHover(true)}
                        onMouseLeave={() => handleCarouselHover(false)}
                    >
                        <motion.div
                            className="flex"
                            style={{ x: currentTranslate }}
                            transition={{ ease: "linear", duration: 0.01 }}
                        >
                            <motion.div
                                className="flex"
                                style={{ gap: `${gap}px` }}
                                animate={{
                                    x:
                                        clickDirection === "left"
                                            ? 6
                                            : clickDirection === "right"
                                                ? -6
                                                : 0,
                                    scale: clickDirection ? 0.995 : 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 24,
                                }}
                                onAnimationComplete={() => setClickDirection(null)}
                            >
                                {extendedReviews.map((review, index) => (
                                    <div
                                        key={`${review.id}-${index}`}
                                        className="flex-shrink-0"
                                        style={{ width: `${cardWidth}px` }}
                                    >
                                        <div className="h-full rounded-2xl bg-gradient-to-b from-white via-slate-50 to-slate-100/80 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-700/90 border border-slate-100/80 dark:border-slate-500/70 shadow-[0_18px_40px_rgba(15,23,42,0.16)] hover:shadow-[0_22px_55px_rgba(15,23,42,0.26)] hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 overflow-hidden">
                                            <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                                            <div className="pt-8 px-6">
                                                <div className="flex justify-center -mb-10">
                                                    <Avatar
                                                        src={review.image}
                                                        initials={review.initials}
                                                    />
                                                </div>
                                            </div>

                                            <div className="p-6 pt-14">
                                                <div className="flex justify-center gap-1 mb-3">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="w-4 h-4 fill-amber-400 text-amber-400"
                                                        />
                                                    ))}
                                                </div>

                                                <div className="relative mb-6 min-h-[80px]">
                                                    <Quote className="absolute -top-2 -left-2 w-4 h-4 text-blue-400/20" />
                                                    <p className="text-center text-[13px] md:text-sm text-slate-700 dark:text-slate-100 leading-relaxed">
                                                        "{review.review}"
                                                    </p>
                                                    <Quote className="absolute -bottom-2 -right-2 w-4 h-4 text-purple-400/20 rotate-180" />
                                                </div>

                                                <div className="text-center space-y-2">
                                                    <h3 className="text-[15px] md:text-base font-semibold text-slate-900 dark:text-slate-50 tracking-tight">
                                                        {review.name}
                                                    </h3>
                                                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 text-[11px] md:text-xs text-slate-600 dark:bg-slate-700/90 dark:text-slate-100 uppercase tracking-[0.16em]">
                                                        {review.course}
                                                    </div>
                                                </div>

                                                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-600/70">
                                                    <div className="h-0.5 w-16 mx-auto bg-gradient-to-r from-blue-400 via-sky-400 to-purple-400 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Gradient fades – softer & darker in dark mode */}
                        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/90 to-transparent dark:from-slate-950/70 dark:to-transparent" />
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/90 to-transparent dark:from-slate-950/70 dark:to-transparent" />
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center items-center gap-2 mt-6">
                        <div className="flex items-center gap-2">
                            <div
                                className={`w-2 h-2 rounded-full ${
                                    isPlaying ? "bg-green-500" : "bg-amber-500"
                                }`}
                            />
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                {isPlaying ? "Auto-scrolling" : "Paused"}
              </span>
                        </div>
                    </div>
                </div>

                {/* Stats + CTA – upgraded */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-16"
                >
                    <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-700/80 bg-gradient-to-br from-white via-slate-50 to-slate-100/90 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-800/95 shadow-[0_20px_60px_rgba(15,23,42,0.45)] px-6 py-8 md:px-10 md:py-10">
                        {/* subtle background glow */}
                        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/25 via-purple-500/25 to-cyan-400/20 blur-3xl" />
                        <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-gradient-to-tr from-sky-400/20 via-indigo-500/25 to-fuchsia-500/20 blur-3xl" />

                        <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                            {/* Left: heading + stats */}
                            <div className="max-w-xl space-y-5">
                                <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:bg-slate-100/5 dark:text-slate-300">
                                    Trusted outcomes
                                    <span className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-purple-500" />
                                </p>

                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                                    Real students. Real offers.
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-purple-400">
            You could be next.
          </span>
                                </h3>

                                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                                    From first call to final admit, we stay hands-on with strategy,
                                    applications and decision making—so you&apos;re never guessing the
                                    next step.
                                </p>

                                <div className="grid grid-cols-2 gap-5 md:gap-6 pt-2">
                                    {[
                                        { value: "500+", label: "Students guided" },
                                        { value: "98%", label: "Admit & outcome success" },
                                        { value: "4.9★", label: "Average session rating" },
                                        { value: "50+", label: "Top universities reached" },
                                    ].map((stat) => (
                                        <div key={stat.label} className="space-y-1">
                                            <div className="text-lg md:text-2xl font-semibold text-slate-900 dark:text-white">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs md:text-sm text-slate-500 dark:text-slate-300">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: CTA card */}
                            <div className="w-full max-w-xs md:max-w-sm">
                                <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white dark:bg-slate-950/95 border border-slate-700/60 shadow-[0_18px_40px_rgba(15,23,42,0.7)] px-5 py-6 md:px-6 md:py-7">
                                    <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/40 via-cyan-400/30 to-purple-500/35 blur-2xl" />

                                    <div className="relative space-y-4">
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                                            Start in under 5 minutes
                                        </p>

                                        <h4 className="text-lg md:text-xl font-semibold leading-snug">
                                            Book a{" "}
                                            <span className="text-sky-300">
                1:1 strategy call
              </span>{" "}
                                            and get a concrete next-step plan.
                                        </h4>

                                        <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                                            <li>• 30–45 min video call with an expert</li>
                                            <li>• Clarity on exams, colleges & timelines</li>
                                            <li>• Tailored roadmap for your profile</li>
                                        </ul>

                                        <button className="group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-sky-500 to-purple-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-[1.02]">
                                            <span>Book your first session</span>
                                            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </button>

                                        <p className="text-[11px] text-slate-400 pt-2">
                                            No pressure, no upsell during the call—just honest guidance on
                                            what&apos;s realistic for you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}