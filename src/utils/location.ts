// Utility to detect user location
export const getUserLocation = async (): Promise<string | null> => {
  try {
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
            const city = data.address?.city || data.address?.town || null;
            resolve(city);
          } catch {
            resolve(null);
          }
        },
        () => {
          resolve(null);
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
  return location.toLowerCase().includes("abuja");
};
