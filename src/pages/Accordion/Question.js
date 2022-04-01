import styles from "./Question.module.css";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Question({ title, info }) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.question}>{title}</h2>
        <button onClick={() => setShow(!show)} className={styles.showBtn}>
          {show ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {show && <div className={styles.body}>{info}</div>}
    </div>
  );
}
