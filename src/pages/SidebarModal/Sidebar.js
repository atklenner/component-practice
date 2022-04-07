import styles from "./Sidebar.module.css";
// import { FaHamburger } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <SidebarMenu />
      <div className={styles.container}>
        {/* <button className={styles.hamburgerBtn}>
          <FaHamburger />
        </button> */}
        <button className={styles.modalBtn} onClick={() => setShowModal(true)}>
          Show Modal
        </button>
      </div>
      {showModal && <Modal close={() => setShowModal(false)} />}
    </div>
  );
}
