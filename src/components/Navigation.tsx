import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow backdrop-blur-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-primary fill-primary" />
            <span className="text-2xl font-black text-foreground">Labtraca</span>
          </div>

          <Button className="rounded-full font-bold px-6">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};
