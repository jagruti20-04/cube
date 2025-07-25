import React, { useState } from 'react'
import '../styles/AddToCartButton.css'

const AddToCartButton = ({ subscriptionType, selectedFlavors, pricing }) => {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const cartItem = {
      subscriptionType,
      flavors: subscriptionType === 'single' 
        ? [selectedFlavors.primary]
        : [selectedFlavors.primary, selectedFlavors.secondary],
      price: pricing.current,
      originalPrice: pricing.original
    }
    
    console.log('Adding to cart:', cartItem)
    alert(`Added ${subscriptionType} subscription to cart!\nFlavors: ${cartItem.flavors.join(', ')}\nPrice: $${pricing.current.toFixed(2)}`)
    
    setIsAdding(false)
  }

  return (
    <button 
      className="add-to-cart-button"
      onClick={handleAddToCart}
      disabled={isAdding || (subscriptionType === 'double' && !selectedFlavors.secondary)}
    >
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </button>
  )
}

export default AddToCartButton
