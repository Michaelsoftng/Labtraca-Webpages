import { MapPin, X } from "lucide-react";
import { useState, useEffect } from "react";
import { getUserLocation, isLocationAvailable } from "@/utils/location";

export const LocationBanner = () => {
    const [location, setLocation] = useState<string | null>(null);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const userLocation = await getUserLocation();
                if (userLocation) {
                    setLocation(userLocation);
                }
            } catch (err) {
                console.error("Location detection failed:", err);
            }
        };

        fetchLocation();
    }, []);

    // Don't show banner if dismissed
    if (isDismissed) return null;

    const locationAvailable = location ? isLocationAvailable(location) : false;

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-[60] w-full ${location && locationAvailable
                ? "bg-primary text-primary-foreground"
                : "bg-destructive text-destructive-foreground"
                } py-2.5 px-4`}
        >
            <div className="container mx-auto flex items-center justify-center gap-2 relative">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">
                    {location ? (
                        locationAvailable ? (
                            <>
                                Delivering to <strong>{location}</strong>
                            </>
                        ) : (
                            <>
                                <strong>{location}</strong> - Service not available in your region. Currently serving Abuja only.
                            </>
                        )
                    ) : (
                        <>
                            Service currently available in <strong>Abuja</strong> only. Enable location or select your city.
                        </>
                    )}
                </span>
                <button
                    onClick={() => setIsDismissed(true)}
                    className="absolute right-0 hover:opacity-80 transition-opacity"
                    aria-label="Dismiss"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};
