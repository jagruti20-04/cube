import React from 'react'
import '../styles/StarRating.css'

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <span key={index} className="star filled">★</span>
        } else if (index === fullStars && hasHalfStar) {
          return <span key={index} className="star half">★</span>
        } else {
          return <span key={index} className="star empty">★</span>
        }
      })}
    </div>
  )
}

export default StarRating
