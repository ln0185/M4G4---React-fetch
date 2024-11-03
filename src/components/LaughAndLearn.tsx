import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import AdviceCard from "./AdviceCard";
import { FunnyPicture } from "../types";

// API URLs
const ADVICE_API_URL = "https://api.adviceslip.com/advice";
const FUNNY_PICTURE_API_URL = "https://random.dog/woof.json";

const LaughAndLearn: React.FC = () => {
  const [advice, setAdvice] = useState<string>("");
  const {
    data: funnyPictureData,
    error: pictureError,
    loading: pictureLoading,
  } = useFetch<FunnyPicture>(FUNNY_PICTURE_API_URL);

  const fetchAdvice = async () => {
    try {
      const response = await fetch(ADVICE_API_URL);
      const result = await response.json();
      setAdvice(result.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice(); // Fetch initial advice on component mount
  }, []);

  if (pictureLoading) return <p>Loading...</p>;
  if (pictureError) return <p>Error: {pictureError}</p>;

  return advice && funnyPictureData ? (
    <AdviceCard
      advice={advice}
      funnyPicture={funnyPictureData.url}
      onNewAdviceClick={fetchAdvice}
    />
  ) : null;
};

export default LaughAndLearn;
