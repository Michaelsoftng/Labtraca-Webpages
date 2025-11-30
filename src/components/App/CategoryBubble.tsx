import { LucideIcon } from "lucide-react";

interface CategoryBubbleProps {
    title: string;
    icon: LucideIcon;
    color: string; // e.g., "bg-blue-100 text-blue-600"
    onClick?: () => void;
}

const CategoryBubble = ({ title, icon: Icon, color, onClick }: CategoryBubbleProps) => {
    return (
        <div
            onClick={onClick}
            className="group flex flex-col items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer transition-transform hover:scale-105 w-full max-w-[120px] sm:max-w-none"
        >
            <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] ${color} flex items-center justify-center shadow-sm group-hover:shadow-md transition-all flex-shrink-0`}>
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14" />
            </div>
            <span className="font-bold text-xs sm:text-sm md:text-base text-center text-foreground/80 group-hover:text-foreground transition-colors line-clamp-2">
                {title}
            </span>
        </div>
    );
};

export default CategoryBubble;
