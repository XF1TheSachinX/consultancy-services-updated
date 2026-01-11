import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AvatarProps {
    src?: string;
    initials: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    verified?: boolean;
}

export default function Avatar({
                                   src,
                                   initials,
                                   size = 'md',
                                   className,
                                   verified = true
                               }: AvatarProps) {
    const sizeClasses = {
        sm: 'w-20 h-20 text-xl',
        md: 'w-24 h-24 md:w-28 md:h-28 text-2xl',
        lg: 'w-32 h-32 text-3xl'
    };

    return (
        <div className="relative">
            {/* Main Avatar Container */}
            <div className={cn(
                "relative rounded-full overflow-hidden",
                "border-4 border-white dark:border-slate-800",
                "shadow-lg dark:shadow-xl",
                sizeClasses[size],
                className
            )}>
                {src ? (
                    <Image
                        src={src}
                        alt="Student avatar"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 112px"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                        {initials}
                    </div>
                )}
            </div>

            {/* Verified Badge */}
            {verified && (
                <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800 shadow-md">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            )}
        </div>
    );
}