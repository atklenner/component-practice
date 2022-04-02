import { useState } from "react";
import styles from "./Color.module.css";

export default function Color({ color, saturation, dark }) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
    navigator.clipboard.writeText(color);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }

  const style = {
    backgroundColor: color,
    color: dark ? "white" : "dark",
  };

  return (
    <div className={styles.color} style={style} onClick={handleClick}>
      <p>{saturation}%</p>
      <p>{color}</p>
      {show && <p>Copied to Clipboard</p>}
    </div>
  );
}
