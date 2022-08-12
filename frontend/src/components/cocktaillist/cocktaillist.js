import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cocktaillist.css";
import axios from "axios";

const List = () => {
  const [cocktails, setCocktails] = useState([]);

  const navigate = useNavigate();
  const routePage = () => {
    let path = "/drinkpage";
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

  const printid = () => {
    console.log(cocktails);
  };

  return (
    <div>
      {cocktails.length ? (
        cocktails.map((cocktails, index) => (
          <div key={cocktails.idDrink}>
            <p onClick={printid}>
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
