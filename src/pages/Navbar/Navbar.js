import { FaTwitter, FaFacebook } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>Logo</div>
      <div>
        <ul className={styles.pageLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Profile</li>
        </ul>
      </div>
      <div>
        <ul className={styles.socialLinks}>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </nav>
  );
}
