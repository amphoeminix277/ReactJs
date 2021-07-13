import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating"

export default function Color({ id, title, color, rating, onRemove = id => id, onRate = params => params }) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}> <FaTrash/> </button>
      <div style={{height: 30, width: "100%", backgroundColor: color, margin: "3px"}}>

      </div>
      <StarRating selectedStars={rating} onRate={rating => {
        onRate(id, rating)
      }}/>
    </section>
  );
}