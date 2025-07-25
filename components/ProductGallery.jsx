import React from 'react'
import '../styles/ProductGallery.css'

const ProductGallery = ({ images, currentIndex, onImageChange, selectedFlavor }) => {
  const mainImage = images.main[selectedFlavor] || images.main.chocolate
  const thumbnails = images.thumbnails

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <img 
          src={mainImage} 
          alt="Product main view"
          className="main-image"
        />
        <div className="image-dots">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`dot ${index === 0 ? 'active' : ''}`}
              onClick={() => onImageChange(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="thumbnail-grid">
        <div className="thumbnail-row">
          {thumbnails.row1.map((image, index) => (
            <button
              key={index}
              className="thumbnail-button"
              onClick={() => onImageChange(index)}
            >
              <img src={image} alt={`Product view ${index + 1}`} />
            </button>
          ))}
        </div>
        <div className="thumbnail-row">
          {thumbnails.row2.map((image, index) => (
            <button
              key={index + 5}
              className="thumbnail-button"
              onClick={() => onImageChange(index + 5)}
            >
              <img src={image} alt={`Product view ${index + 6}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
