import { createContext, useContext, useState, useEffect } from "react";

const URL = "";

const CocktailContext = createContext();

export const useCocktailContext = () => useContext(CocktailContext);

export function CocktailContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getCocktails() {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await res.json();
        if (data.drinks) {
          setCocktails(
            data.drinks.map((item) => {
              const { idDrink, strDrink, strDrinkThumb, strIngredient1 } = item;

              return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strIngredient1,
              };
            })
          );
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    getCocktails();
  }, [searchTerm]);

  return (
    <CocktailContext.Provider
      value={{ searchTerm, setSearchTerm, cocktails, loading }}
    >
      {children}
    </CocktailContext.Provider>
  );
}
