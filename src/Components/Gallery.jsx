import React, { useState } from "react";
import "./Gallery.css";

const Gallery = ({ images, currentIndex, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [showGallery, setShowGallery] = useState(true);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickImage = () => {
    // Do nothing when the image is clicked
  };

  const handleCategoryClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    showGallery && (
      <div className="gallery">
        <div className="category-buttons">
          <button onClick={() => handleCategoryClick(-1)}>All Photos</button>
          <button onClick={() => handleCategoryClick(0)}>Exterior</button>
          <button onClick={() => handleCategoryClick(4)}>Interior</button>
          <button onClick={() => handleCategoryClick(8)}>Mechanical</button>
          <button onClick={() => handleCategoryClick(9)}>Docs</button>
          <button onClick={() => handleCategoryClick(10)}>Other</button>
        </div>
        {currentImageIndex !== -1 ? (
          <div className="gallery-container">
            <img
              src={images[currentImageIndex]}
              alt=""
              className="gallery-image"
              onClick={handleClickImage}
            />
            <button
              className="gallery-button gallery-button-prev"
              onClick={handlePrevious}
            >
              &lt;
            </button>
            <button
              className="gallery-button gallery-button-next"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        ) : (
          <div className="all-photos-container">
            <div className="all-photos-grid">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="all-photos-image"
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        )}
        <button className="gallery-close" onClick={onClose}>
          Close
        </button>
      </div>
    )
  );
};

export default Gallery;
