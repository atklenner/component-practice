import styles from "./ClearButton.module.css";

export default function ClearButton({ handleClick }) {
  return (
    <button onClick={handleClick} className={styles.button}>
      Clear All
    </button>
  );
}
