import { useEffect, useState } from "react";
import "./Carrousel.css";

const Carrousel = ({ images, sizeClass = "" }) => {
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
    <section className={`hero-banner ${sizeClass}`}>
      <div className="hero-banner__image-container">
        {images.map((image, index) => (
          <img
            src={image.url}
            alt="images"
            className={`hero-banner__image ${
              currentImageIndex !== index ? "hero-banner__image--hidden" : ""
            }`}
            key={image.id}
          />
        ))}
      </div>
      <div className="hero-banner__dots-container">
        {images.map((_, index) => (
          <button
            key={index}
            className={`hero-banner__dot ${
              currentImageIndex === index ? "hero-banner__dot--active" : ""
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carrousel;
