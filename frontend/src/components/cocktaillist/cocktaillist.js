import { useState, useEffect } from "react";
import "./cocktaillist.css";
import axios from "axios";

const List = () => {
  const [cocktails, setCocktails] = useState([]);

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
        cocktails.map((cocktails, index) => (
          <div>
            <p>
              {index + 1}. {cocktails.strDrink}
            </p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default List;
