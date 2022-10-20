import React from "react";
import { useNavigate } from "react-router-dom";

function Spirits() {
  const navigate = useNavigate();
  const routePage = (spirits) => {
    let path = `/spiritsdrinkpage/${spirits}`;
    navigate(path);
  };

  const spiritNames = ["Bourbon", "Gin", "Rum", "Tequila", "Vodka"];

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
