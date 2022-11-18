import React from "react";
import { useNavigate } from "react-router-dom";
import "../spiritimage/spiritimage.css";

function SpiritImage({ id, spirit, imageUrl }) {
  const navigate = useNavigate();
  const routePage = (spirits) => {
    let path = `/spiritsdrinkpage/${spirits}`;
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
          {spirit}
        </div>
      </div>
    </div>
  );
}

export default SpiritImage;
