import React from "react";
import { createArray } from "./utils";
import Star from "./Star";

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = index => index }) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
