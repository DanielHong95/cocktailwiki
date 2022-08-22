import { useNavigate } from "react-router-dom";

function Spirits() {
  const navigate = useNavigate();
  const routePage = (spirit) => {
    let path = `/spiritsdrinkpage/${spirit}`;
    navigate(path);
  };

  const spiritNames = ["Bourbon", "Gin", "Rum", "Tequila", "Vodka"];
  const spiritNamesObj = [
    { spirit: "Bourbon" },
    { spirit: "Gin" },
    { spirit: "Rum" },
    { spirit: "Tequila" },
    { spirit: "Vodka" },
  ];

  return (
    <div key={spiritNamesObj.spirit}>
      {spiritNames.map((spirits) => (
        <button onClick={() => routePage(spirits)}>{spirits}</button>
      ))}
    </div>
  );
}

export default Spirits;
