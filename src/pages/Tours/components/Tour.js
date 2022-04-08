import { useState } from "react";
import styles from "./Tour.module.css";

export default function Tour({ id, image, name, info, price, handleClick }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt="You could be here instead"
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderTitle}>
            {name}
            <span className={styles.price}>{price}</span>
          </div>
        </div>
        <div className="card-content">
          <div className={styles.blurb}>
            {readMore ? info : `${info.substring(0, 200)}...`}
          </div>
          <button
            onClick={() => setReadMore(!readMore)}
            className={styles.readMoreBtn}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </div>
        <button
          onClick={() => handleClick(id)}
          className={styles.notInterestedBtn}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}
