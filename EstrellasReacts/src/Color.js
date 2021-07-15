import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useColors } from "./ColorProvider";

export default function Color({ id, title, color, rating }) {
  const { updateRateColor, removeColor } = useColors();

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}> <FaTrash/> </button>
      <div style={{height: 30, width: "100%", backgroundColor: color, margin: "3px"}}>

      </div>
      <StarRating selectedStars={rating} onRate={rating => {
        updateRateColor(id, rating)
      }}/>
    </section>
  );
}