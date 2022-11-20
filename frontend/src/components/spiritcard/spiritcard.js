import React from "react";
import { useNavigate } from "react-router-dom";
import "./spiritcard.css";

function SpiritCard({ id, spirit, imageUrl }) {
  const navigate = useNavigate();
  const routePage = (spirits) => {
    let path = `/spiritscocktails/${spirits}`;
    navigate(path);
  };

  return (
    <div className="menu-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="spirit" onClick={() => routePage(spirit)}>
          {spirit.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default SpiritCard;
