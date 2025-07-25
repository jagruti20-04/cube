import React from 'react'
import StarRating from './StarRating'
import '../styles/ProductInfo.css'

const ProductInfo = ({ product, pricing }) => {
  return (
    <header className="product-info">
      <div className="product-header">
        <h1 className="product-title">{product.title}</h1>
        <div className="product-rating">
          <StarRating rating={product.rating.value} />
          <span className="rating-text">
            {product.rating.value} ({product.rating.count}+ reviews)
          </span>
        </div>
      </div>
      <p className="product-description">
        {product.description}
      </p>
    </header>
  )
}

export default ProductInfo
