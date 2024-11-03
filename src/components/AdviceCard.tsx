import React from "react";

interface AdviceCardProps {
  advice: string;
  funnyPicture: string;
  onNewAdviceClick: () => void;
}

const AdviceCard: React.FC<AdviceCardProps> = ({
  advice,
  funnyPicture,
  onNewAdviceClick,
}) => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
          padding: "1rem",
          maxWidth: "500px",
          margin: "0 auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Today's Advice:
        </h2>
        <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>"{advice}"</p>
        <img
          src={funnyPicture}
          alt="Funny Animal"
          style={{
            width: "100%",
            height: "auto",
            marginTop: "1rem",
            borderRadius: "8px",
          }}
        />
        <button
          onClick={onNewAdviceClick}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          New Advice
        </button>
      </div>
    </div>
  );
};

export default AdviceCard;
