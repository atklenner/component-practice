import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Cocktail Reference</h1>
        <nav>
          <ul className={styles.linkList}>
            <li>
              <Link to="/cocktails" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/cocktails/about" className={styles.link}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
