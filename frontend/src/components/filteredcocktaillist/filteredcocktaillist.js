import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FilteredCocktaiList(props) {
  const [cocktails, setCocktails] = useState([]);

  const navigate = useNavigate();
  const routePage = (idDrink) => {
    let path = `/drinkpage/${idDrink}`;
    navigate(path);
  };

  useEffect(() => {
    async function fetchCocktails() {
      // You can await here
      const cocktails = await axios.get(`http://localhost:5000/cocktails/`);
      setCocktails(cocktails.data);
    }
    fetchCocktails();
  }, []);

  return (
    <div className="container" key={props.spirit}>
      <header>{props.spirit}</header>
      {cocktails.length ? (
        cocktails
          .filter(
            (cocktail) =>
              cocktail.strIngredient1 === "Bourbon" ||
              cocktail.strIngredient2 === "Bourbon" ||
              cocktail.strIngredient3 === "Bourbon" ||
              cocktail.strIngredient4 === "Bourbon" ||
              cocktail.strIngredient5 === "Bourbon"
          )
          .map((cocktail, index) => {
            return (
              <div key={cocktail.idDrinK}>
                <p onClick={() => routePage(cocktail.idDrinK)}>
                  {index + 1}. {cocktail.strDrink}
                </p>
              </div>
            );
          })
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default FilteredCocktaiList;
