import reviews from "./data";
import styles from "./Reviews.module.css";
import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function Reviews() {
  const [value, setValue] = useState(0);
  const { name, job, text, image } = reviews[value];

  function changeValue(change) {
    setValue((prevValue) => {
      return (
        (((prevValue + change) % reviews.length) + reviews.length) %
        reviews.length
      );
    });
  }

  function randomValue() {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === value) random += 1;
    setValue(random);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Reviews</h1>
        </div>
        <div className={styles.review}>
          <div className={styles.image}>
            <img src={image} alt="No one is beautiful" className={styles.img} />
          </div>
          <h2 className={styles.h2}>{name}</h2>
          <h3 className={styles.h3}>{job}</h3>
          <p className={styles.p}>{text}</p>
          <div className={styles.buttons}>
            <button onClick={() => changeValue(-1)} className={styles.left}>
              <FaAngleLeft />
            </button>
            <button onClick={() => changeValue(1)} className={styles.right}>
              <FaAngleRight />
            </button>
          </div>
          <button onClick={randomValue} className={styles.surprise}>
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}
