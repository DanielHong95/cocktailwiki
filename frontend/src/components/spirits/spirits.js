import React from "react";

// components
import SpiritCard from "../spiritcard/spiritcard";

function Spirits() {
  const spiritData = [
    {
      id: 1,
      spirit: "Bourbon",
      imageUrl:
        "https://images.unsplash.com/photo-1628057207834-b701417935a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1948&q=80",
    },
    {
      id: 2,
      spirit: "Gin",
      imageUrl:
        "https://images.unsplash.com/photo-1563630440878-c25af103219a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      spirit: "Rum",
      imageUrl:
        "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
    {
      id: 4,
      spirit: "Tequila",
      imageUrl:
        "https://images.unsplash.com/photo-1643905551668-a57972981ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80",
    },
    {
      id: 5,
      spirit: "Vodka",
      imageUrl:
        "https://images.unsplash.com/photo-1618412046321-f8127c4589ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <div>
      {spiritData.map(({ id, spirit, imageUrl }) => (
        <SpiritCard key={id} spirit={spirit} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default Spirits;
