import { createContext, useContext, useState, useEffect } from "react";

const URL = "www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const CocktailContext = createContext();

export const useCocktailContext = () => useContext(CocktailContext);

export function CocktailContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch(URL + searchTerm)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <CocktailContext.Provider
      value={{ searchTerm, setSearchTerm, cocktails, loading }}
    >
      {children}
    </CocktailContext.Provider>
  );
}
