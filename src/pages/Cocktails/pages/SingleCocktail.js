import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Styles/SingleCocktail.module.css";

export default function SingleCocktail() {
  let { id } = useParams();
  const [cocktail, setCocktail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function getCocktails() {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const measures = [
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
            measures,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    getCocktails();
  }, [id]);

  return isLoading ? (
    <h1 className={styles.title}>Loading</h1>
  ) : (
    <section>
      <h2 className={styles.title}>{cocktail.name}</h2>
      <div className={styles.drink}>
        <img
          src={cocktail.image}
          alt={cocktail.name}
          className={styles.drink__image}
        ></img>
        <div className={styles.drink__info}>
          <p>
            <span className={styles.drink__data}>name :</span> {cocktail.name}
          </p>
          <p>
            <span className={styles.drink__data}>category :</span>{" "}
            {cocktail.category}
          </p>
          <p>
            <span className={styles.drink__data}>info :</span> {cocktail.info}
          </p>
          <p>
            <span className={styles.drink__data}>glass :</span> {cocktail.glass}
          </p>
          <p>
            <span className={styles.drink__data}>instructons :</span>{" "}
            {cocktail.instructions}
          </p>
          <p>
            <span className={styles.drink__data}>ingredients :</span>
            {cocktail.ingredients.map((item, index) => {
              return item ? (
                <span key={index}>
                  {cocktail.measures[index]} {item}
                </span>
              ) : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
