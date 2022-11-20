import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);

  const navigate = useNavigate();
  const routePage = (idDrink) => {
    let path = `/drinkinfo/${idDrink}`;
    navigate(path);
  };

  useEffect(() => {
    async function fetchCocktails() {
      // You can await here
      const cocktails = await axios.get("http://localhost:5000/cocktails/");
      setCocktails(cocktails.data);
    }
    fetchCocktails();
  }, []);

  return (
    <div className="container">
      {cocktails.length ? (
        cocktails.map((cocktail, index) => {
          return (
            <div key={cocktail.idDrinK}>
              <div
                className="list"
                href="#"
                onClick={() => routePage(cocktail.idDrinK)}
              >
                {cocktail.strDrink}
              </div>
            </div>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default CocktailList;
