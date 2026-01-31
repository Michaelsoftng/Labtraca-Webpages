import { Star, Clock, TestTube2 } from "lucide-react";


interface TestCardProps {
  name: string;
  price: number | string;
  description?: string;
  duration?: string | number;
  group?: string;
  code?: string;
  rating?: number;
  reviews?: number;
  image?: string; // Kept for interface compatibility but ignored
  turnaroundTime?: string;
  specimen?: string;
}

const TestCard = ({
  name,
  price,
  rating = 4.5,
  reviews = 0,
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
    <div className="group bg-card rounded-3xl p-6 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/10 transition-colors" />

      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
          <TestTube2 className="w-6 h-6" />
        </div>
        <span className="font-black text-lg text-primary bg-primary/5 px-3 py-1 rounded-full">
          {formattedPrice}
        </span>
      </div>

      <div className="space-y-3 mb-6 flex-1 relative z-10">
        <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {group && <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground font-medium">{group}</span>}
          {specimen && <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground font-medium">{specimen}</span>}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-sm font-medium">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            <span>{rating}</span>
            <span className="text-muted-foreground text-xs">({reviews})</span>
          </div>
          {displayDuration && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
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
