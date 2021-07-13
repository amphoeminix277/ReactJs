import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import colorData from "./colorData.json";
import ColorList from "./ColorList";

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <div style={{ margin: "5px" }}>
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor = {(id, rating) => {
          const newColors = colors.map((color) => (
            color.id === id ? {...color, rating} : color
          ));
          setColors(newColors);
        }}
      />
    </div>
  );
}

export default App;
