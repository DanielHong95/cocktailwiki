import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cocktaillist.css";
import axios from "axios";

function List() {
  const [cocktails, setCocktails] = useState([]);

  const navigate = useNavigate();
  const routePage = (idDrink) => {
    let path = `/drinkpage/${idDrink}`;
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
    <div>
      {cocktails.length ? (
        cocktails.map((cocktail, index) => {
          return (
            <div key={cocktail.idDrinK}>
              <p
                href="#"
                class="link"
                onClick={() => routePage(cocktail.idDrinK)}
              >
                {cocktail.strDrink}
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

export default List;
