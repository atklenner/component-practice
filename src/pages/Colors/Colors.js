import Color from "./Color";
import styles from "./Colors.module.css";
import { useState } from "react";
import Values from "values.js";

export default function Colors() {
  const [hexCode, setHexCode] = useState("");
  const [currentColor, setCurrentColor] = useState("#f15025");

  function handleChange(e) {
    setHexCode(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    setCurrentColor(hexCode);
  }

  const grid = [];
  const color = new Values(currentColor);

  color
    .tints()
    .reverse()
    .forEach((tint, index) => {
      grid.push({
        id: index,
        color: tint.hexString(),
        saturation: tint.weight,
        dark: false,
      });
    });
  grid.push({ id: 10, color: "#f15025", saturation: "0", dark: false });
  color.shades().forEach((tint, index) => {
    grid.push({
      id: index + 11,
      color: tint.hexString(),
      saturation: tint.weight,
      dark: true,
    });
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="hexCode">
            Color Generator:{" "}
            <input
              type="text"
              name="hexCode"
              id="hexCode"
              value={hexCode}
              onChange={handleChange}
              required
              pattern="/#([a-f0-9]){6}/i"
              placeholder="#f15025"
            />
          </label>
          <button>Submit</button>
        </form>
        <div className={styles.colorGrid}>
          {grid.map((frame) => {
            return (
              <Color
                key={frame.id}
                color={frame.color}
                saturation={frame.saturation}
                dark={frame.dark}
              ></Color>
            );
          })}
        </div>
      </div>
    </div>
  );
}
