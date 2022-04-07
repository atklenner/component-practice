/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaHamburger,
} from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>Logo</h1>
        <div>
          <ul className={styles.pageLinks}>
            <li>
              <a href="#" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Contact
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.socialLinks}>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub />
              </a>
            </li>
          </ul>
          <div className={styles.hamburger}>
            <button className={styles.hamburgerBtn} onClick={toggleShow}>
              <FaHamburger />
            </button>
          </div>
        </div>
      </nav>
      {show && (
        <div className={styles.linksDropdown}>
          <ul className={styles.dropdownLinks}>
            <li>
              <a href="#" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Contact
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Profile
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
