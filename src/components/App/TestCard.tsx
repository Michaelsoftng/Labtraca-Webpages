import { Star, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestCardProps {
  name: string;
  price: number | string;
  description?: string;
  duration?: string | number;
  group?: string;
  code?: string;
  rating?: number;
  reviews?: number;
  image?: string;
  turnaroundTime?: string;
  specimen?: string;
}

const TestCard = ({
  name,
  price,
  rating = 4.5,
  reviews = 0,
  image,
  turnaroundTime,
  duration,
  description,
  group,
  specimen,
}: TestCardProps) => {
  // Format price as naira currency
  const formattedPrice =
    typeof price === "number" ? `₦${price.toLocaleString()}` : price;

  // Use duration from query or turnaroundTime prop
  const displayDuration = turnaroundTime || (duration ? `${duration}h` : null);
  return (
    <div className="group bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all cursor-pointer">
      {/* Image Area */}
      <div className="h-40 bg-muted relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/10 text-secondary">
            <span className="font-bold text-4xl opacity-20">LT</span>
          </div>
        )}

        {/* Add Button Overlay */}
        <div className="absolute bottom-3 right-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button size="icon" className="rounded-full h-10 w-10 shadow-lg">
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <span className="font-black text-primary whitespace-nowrap">
            {formattedPrice}
          </span>
        </div>

        {description && (
          <p className="text-xs text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}

        {(group || specimen) && (
          <div className="text-xs space-y-1">
            {group && (
              <div className="text-muted-foreground">
                <span className="font-semibold">Group:</span> {group}
              </div>
            )}
            {specimen && (
              <div className="text-muted-foreground">
                <span className="font-semibold">Specimen:</span> {specimen}
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1 bg-green-50 text-green-700 px-1.5 py-0.5 rounded">
            <Star className="w-3 h-3 fill-current" />
            <span className="font-bold">{rating}</span>
            <span className="opacity-70">({reviews})</span>
          </div>

          {displayDuration && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{displayDuration}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestCard;
