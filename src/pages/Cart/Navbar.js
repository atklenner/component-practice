import { useCartContext } from "./context";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { amount } = useCartContext();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.amount}>cart count: {amount}</p>
      </div>
    </header>
  );
}
