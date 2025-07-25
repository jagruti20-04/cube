import React, { useState, useEffect } from 'react'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import SubscriptionOptions from './SubscriptionOptions'
import FlavorSelector from './FlavorSelector'
import WhatsIncluded from './WhatsIncluded'
import AddToCartButton from './AddToCartButton'
import { productData } from '../data/productData'
import '../styles/ProductPage.css'

const ProductPage = () => {
  const [selectedSubscription, setSelectedSubscription] = useState('single')
  const [selectedFlavors, setSelectedFlavors] = useState({
    primary: 'chocolate',
    secondary: null
  })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [pricing, setPricing] = useState({
    current: 0,
    original: 0,
    compareAt: 0
  })

  // Calculate pricing based on selections
  useEffect(() => {
    const basePrice = selectedSubscription === 'single' ? 10 : 20
    const subscriptionDiscount = 0.25 // 25% off for subscription
    const salesDiscount = 0.20 // 20% additional sales discount
    
    const subscriptionPrice = basePrice * (1 - subscriptionDiscount)
    const finalPrice = basePrice * (1 - salesDiscount)
    
    setPricing({
      current: finalPrice,
      original: basePrice,
      compareAt: subscriptionPrice
    })
  }, [selectedSubscription])

  const handleSubscriptionChange = (type) => {
    setSelectedSubscription(type)
    if (type === 'single') {
      setSelectedFlavors({ primary: 'chocolate', secondary: null })
    } else {
      setSelectedFlavors({ primary: 'chocolate', secondary: 'vanilla' })
    }
  }

  const handleFlavorChange = (position, flavor) => {
    setSelectedFlavors(prev => ({
      ...prev,
      [position]: flavor
    }))
  }

  return (
    <main className="product-page">
      <div className="product-container">
        <section className="product-gallery-section">
          <ProductGallery 
            images={productData.images}
            currentIndex={currentImageIndex}
            onImageChange={setCurrentImageIndex}
            selectedFlavor={selectedFlavors.primary}
          />
        </section>

        <section className="product-details-section">
          <ProductInfo 
            product={productData}
            pricing={pricing}
          />

          <div className="product-options">
            <SubscriptionOptions
              selected={selectedSubscription}
              onChange={handleSubscriptionChange}
              pricing={pricing}
            />

            <FlavorSelector
              subscriptionType={selectedSubscription}
              selectedFlavors={selectedFlavors}
              onFlavorChange={handleFlavorChange}
              flavors={productData.flavors}
            />

            <WhatsIncluded 
              subscriptionType={selectedSubscription}
              content={productData.whatsIncluded}
            />

            <AddToCartButton
              subscriptionType={selectedSubscription}
              selectedFlavors={selectedFlavors}
              pricing={pricing}
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductPage
