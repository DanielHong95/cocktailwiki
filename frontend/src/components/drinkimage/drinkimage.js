import { useState, useEffect } from "react";
import axios from "axios";

const DrinkImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      // You can await here
      const images = await axios.get("http://localhost:5000/cocktails/");
      setImages(images.data);
    }
    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <div>
          <img key={image.idDrink} src={image.strDrinkThumb} alt="images" />
        </div>
      ))}
    </div>
  );
};

export default DrinkImage;
