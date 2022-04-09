import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SingleCocktail() {
  let params = useParams();
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    fetch("www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + params.id)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return <div>SingleCocktail</div>;
}
