import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.amount}>cart count:</p>
      </div>
    </header>
  );
}
