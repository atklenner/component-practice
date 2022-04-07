import styles from "./Modal.module.css";
import { FaRegWindowClose } from "react-icons/fa";

export default function Modal({ close }) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={close}>
          <FaRegWindowClose />
        </button>
        <p>some text</p>
      </div>
    </div>
  );
}
