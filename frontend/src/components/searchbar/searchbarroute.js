import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchCocktails() {
      // You can await here
      const cocktails = await axios.get(`http://localhost:5000/cocktails/`);
      setCocktails(cocktails.data);
    }
    fetchCocktails();
  }, []);
};

export default Data;
