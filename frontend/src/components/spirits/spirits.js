import React from "react";
import { useNavigate } from "react-router-dom";

function Spirits() {
  const navigate = useNavigate();
  const routePage = (spirits) => {
    let path = `/spiritsdrinkpage/${spirits}`;
    navigate(path);
  };

  const spiritNames = ["Bourbon", "Gin", "Rum", "Tequila", "Vodka"];
  // const spiritNames = [
  //   { idSpirit: 0, spirit: "Bourbon" },
  //   { idSpirit: 1, spirit: "Gin" },
  //   { idSpirit: 2, spirit: "Rum" },
  //   { idSpirit: 3, spirit: "Tequila" },
  //   { idSpirit: 4, spirit: "Vodka" },
  // ];

  return (
    <div>
      {spiritNames.map((spirits) => (
        <div key={spirits}>
          <button onClick={() => routePage(spirits)}>{spirits}</button>
        </div>
      ))}
    </div>
  );
}

export default Spirits;
