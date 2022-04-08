import { items } from "./data";
import styles from "./Cart.module.css";
import Navbar from "./Navbar";
import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <h1 className={styles.cartTitle}>Your Cart</h1>
      <div className={styles.cart}>
        {items.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <div className={styles.cartTotal}>
          <p>Total:</p>
          <p>$</p>
        </div>
      </div>
      <button className={styles.clearBtn}>Clear Cart</button>
    </div>
  );
}
