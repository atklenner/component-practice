import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import styles from "./CartItem.module.css";
import { useCartContext } from "./context";

export default function CartItem({ id, title, price, img, amount }) {
  const { dispatch } = useCartContext();
  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <img src={img} alt="its a phone" className={styles.itemImage} />
        <div>
          <p className={styles.itemTitle}>{title}</p>
          <p className={styles.itemPrice}>${price}</p>
          <button
            className={styles.itemRemoveBtn}
            onClick={() => dispatch({ type: "REMOVE", payload: id })}
          >
            Remove
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "INCREASE_AMOUNT", payload: id })}
        >
          <FaChevronUp />
        </button>
        <p className={styles.itemAmount}>{amount}</p>
        <button
          onClick={() => dispatch({ type: "DECREASE_AMOUNT", payload: id })}
        >
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
}
