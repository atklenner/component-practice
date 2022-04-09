import { useCocktailContext } from "../context";
import styles from "../Styles/SearchForm.module.css";

export default function SearchForm() {
  const { searchTerm, setSearchTerm } = useCocktailContext();
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Search Your Favorite Cocktail</h2>
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}
