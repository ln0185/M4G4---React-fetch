import React from "react";
import { PetImage, Location } from "../types";

interface AdventureCardProps {
  petImage: PetImage;
  location: Location;
}

const AdventureCard: React.FC<AdventureCardProps> = ({
  petImage,
  location,
}) => {
  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <h2>Today's Pet Adventure!</h2>
      <img
        src={petImage.url}
        alt="Pet"
        style={{ maxWidth: "300px", borderRadius: "8px" }}
      />
      <h3>{location.name}</h3>
      <p>{location.address}</p>
      {location.photoUrl && (
        <img
          src={location.photoUrl}
          alt={location.name}
          style={{ maxWidth: "300px", borderRadius: "8px" }}
        />
      )}
    </div>
  );
};

export default AdventureCard;
