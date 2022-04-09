import { useCocktailContext } from "../context";
import { Link } from "react-router-dom";
import styles from "../Styles/CocktailList.module.css";

export default function CocktailList() {
  const { cocktails, loading } = useCocktailContext();
  return loading ? (
    <h1 className={styles.title}>Loading</h1>
  ) : (
    <div className={styles.drinkContainer}>
      {cocktails.map((cocktail) => {
        return (
          <Link
            key={cocktail.id}
            to={`/cocktails/${cocktail.id}`}
            className={styles.drink}
          >
            <img
              className={styles.drink__image}
              src={cocktail.image}
              alt="a nice drink to help you deal with your wife/kids"
            />
            <div className={styles.drink__info}>
              <h2 className={styles.drink__name}>{cocktail.name}</h2>
              <p className={styles.drink__base}>{cocktail.info}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
