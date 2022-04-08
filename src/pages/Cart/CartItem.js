import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import styles from "./CartItem.module.css";

export default function CartItem({ id, title, price, img, amount }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <img src={img} alt="its a phone" className={styles.itemImage} />
        <div>
          <p className={styles.itemTitle}>{title}</p>
          <p className={styles.itemPrice}>${price}</p>
          <button className={styles.itemRemoveBtn}>Remove</button>
        </div>
      </div>
      <div>
        <button>
          <FaChevronUp />
        </button>
        <p className={styles.itemAmount}>{amount}</p>
        <button>
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
}
