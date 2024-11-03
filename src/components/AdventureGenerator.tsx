import React, { useEffect, useState } from "react";
import AdventureCard from "./AdventureCard";
import { PetImage, Location } from "../types";

const CAT_API_URL = `https://api.thecatapi.com/v1/images/search?limit=1&api_key=${
  import.meta.env.VITE_CAT_API_KEY
}`;
const LOCATION_API_URL = `https://api.foursquare.com/v3/places/search?near=Paris&limit=1`;

const AdventureGenerator: React.FC = () => {
  const [petImage, setPetImage] = useState<PetImage | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch Pet Image from Cat API
  useEffect(() => {
    const fetchPetImage = async () => {
      try {
        const response = await fetch(CAT_API_URL);
        if (!response.ok) throw new Error("Failed to fetch pet image");
        const data: PetImage[] = await response.json();
        setPetImage(data[0]);
      } catch (error: unknown) {
        setError((error as Error).message || "Failed to fetch pet image");
      }
    };

    fetchPetImage();
  }, []);

  // Fetch Location from Foursquare API
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(LOCATION_API_URL, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_FOURSQUARE_API_KEY}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch location");
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const loc = data.results[0];
          setLocation({
            name: loc.name,
            address: loc.location?.formatted_address || "Unknown location",
            photoUrl:
              loc.categories?.[0]?.icon?.prefix +
              "bg_64" +
              loc.categories?.[0]?.icon?.suffix,
          });
        } else {
          throw new Error("No locations found");
        }
      } catch (error: unknown) {
        setError((error as Error).message || "Failed to fetch location");
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return petImage && location ? (
    <AdventureCard petImage={petImage} location={location} />
  ) : null;
};

export default AdventureGenerator;
