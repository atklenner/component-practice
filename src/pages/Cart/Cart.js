import styles from "./Cart.module.css";
import Navbar from "./Navbar";
import CartItem from "./CartItem";
import { useCartContext } from "./context";

export default function Cart() {
  const { total, cart, dispatch } = useCartContext();
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <h1 className={styles.cartTitle}>Your Cart</h1>
      <div className={styles.cart}>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <div className={styles.cartTotal}>
          <p>Total:</p>
          <p>${total}</p>
        </div>
      </div>
      <button
        className={styles.clearBtn}
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        Clear Cart
      </button>
    </div>
  );
}
