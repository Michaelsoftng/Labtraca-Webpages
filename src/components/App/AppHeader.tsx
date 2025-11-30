import { Search, MapPin, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AppHeader = () => {
    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2 font-black text-2xl text-primary cursor-pointer">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        L
                    </div>
                    <span className="hidden md:inline">LabTraca</span>
                </div>

                {/* Address Selector (Center-Left) */}
                <div className="hidden md:flex items-center gap-2 text-sm bg-muted/50 px-3 py-1.5 rounded-full cursor-pointer hover:bg-muted transition-colors">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-medium truncate max-w-[200px]">
                        Lagos, Nigeria
                    </span>
                </div>

                {/* Search Bar (Center-Right) */}
                <div className="flex-1 max-w-md relative hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search for tests, packages..."
                        className="pl-9 bg-muted/50 border-none focus-visible:ring-1 rounded-full"
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <User className="w-5 h-5" />
                    </Button>
                    <Button className="rounded-full font-bold px-6">
                        Get Started
                    </Button>
                </div>
            </div>

            {/* Mobile Search (Visible only on mobile) */}
            <div className="sm:hidden px-4 pb-3">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search for tests..."
                        className="pl-9 bg-muted/50 border-none rounded-full"
                    />
                </div>
            </div>
        </header>
    );
};

export default AppHeader;
