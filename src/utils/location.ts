// Utility to detect user location
export const getUserLocation = async (): Promise<string | null> => {
  try {
    // Check if we have a cached location
    const cachedData = localStorage.getItem('userLocation');
    if (cachedData) {
      const { location, timestamp } = JSON.parse(cachedData);
      const ONE_DAY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      // Use cached location if it's less than 24 hours old
      if (Date.now() - timestamp < ONE_DAY) {
        return location;
      }
    }

    if (!navigator.geolocation) {
      console.warn("Geolocation is not supported by this browser");
      return null;
    }

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Use reverse geocoding to get city name
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();

            // Prioritize more specific location data
            const city =
              data.address?.city ||
              data.address?.town ||
              data.address?.municipality ||
              data.address?.state ||
              data.address?.county ||
              data.address?.village ||
              null;

            // Cache the location
            localStorage.setItem('userLocation', JSON.stringify({
              location: city,
              timestamp: Date.now()
            }));

            resolve(city);
          } catch {
            resolve(null);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          resolve(null);
        },
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 3600000 // Accept cached position up to 1 hour old
        }
      );
    });
  } catch {
    return null;
  }
};

export const isLocationAvailable = (location: string | null): boolean => {
  if (!location) return false;

  // Only Abuja is available for now
  const normalizedLocation = location.toLowerCase().trim();
  return normalizedLocation.includes('abuja');
};
