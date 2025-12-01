import { useEffect, useState } from "react";
import "./Carrousel.css";

import carg01 from "../../assets/images/anker.webp";
import carg02 from "../../assets/images/anker-02.avif";
import carg03 from "../../assets/images/sharker-03.webp";
import carg04 from "../../assets/images/anker-04.webp";

const Carrousel = () => {
  const images = [
    {
      id: 1,
      url: carg01,
    },
    {
      id: 2,
      url: carg02,
    },
    {
      id: 3,
      url: carg03,
    },
    {
      id: 4,
      url: carg04,
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <section>
      <div className="image-container">
        {/* <button
          className="nav-button left"
          onClick={handlePreviousClick}
        >
          &lt;
        </button> */}

        {images.map((image, index) => (
          <img
            src={image.url}
            alt="images"
            className={currentImageIndex === index ? "block" : "hidden"}
            key={image.id}
          />
        ))}

        {/* <button
          className="nav-button right"
          onClick={handleNextClick}
        >
          &gt;
        </button> */}
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentImageIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)} // Llama a la nueva función con el índice
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carrousel;
