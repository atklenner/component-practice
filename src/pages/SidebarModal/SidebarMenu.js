/* eslint-disable jsx-a11y/anchor-is-valid */
import { slide as Menu } from "react-burger-menu";
import styles from "./SidebarMenu.module.css";
import {
  FaTwitter,
  FaTiktok,
  FaWindows,
  FaXbox,
  FaLinux,
} from "react-icons/fa";

export default function SidebarMenu() {
  return (
    <Menu>
      <div>
        <ul className={styles.menu}>
          <li>
            <a className={styles.menuItem} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">
              Projects
            </a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">
              Contact
            </a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">
              About
            </a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.socials}>
          <li>
            <a href="#">
              <FaTwitter style={{ color: "whitesmoke" }} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTiktok style={{ color: "whitesmoke" }} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaWindows style={{ color: "whitesmoke" }} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaXbox style={{ color: "whitesmoke" }} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinux style={{ color: "whitesmoke" }} />
            </a>
          </li>
        </ul>
      </div>
    </Menu>
  );
}
