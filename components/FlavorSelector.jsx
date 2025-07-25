import React from 'react'
import '../styles/FlavorSelector.css'

const FlavorSelector = ({ subscriptionType, selectedFlavors, onFlavorChange, flavors }) => {
  return (
    <div className="flavor-selector">
      <h3>Choose Flavor</h3>
      
      <div className="flavor-options">
        {flavors.map((flavor) => (
          <div
            key={flavor.id}
            className={`flavor-option ${selectedFlavors.primary === flavor.id ? 'selected' : ''}`}
            onClick={() => onFlavorChange('primary', flavor.id)}
          >
            {flavor.id === 'chocolate' && selectedFlavors.primary === flavor.id && (
              <div className="best-seller-badge">BEST-SELLER</div>
            )}
            <div className="flavor-radio">
              <input
                type="radio"
                name="primary-flavor"
                value={flavor.id}
                checked={selectedFlavors.primary === flavor.id}
                onChange={() => onFlavorChange('primary', flavor.id)}
              />
            </div>
            <span className="flavor-name">{flavor.name}</span>
            <div className="flavor-image">
              <img src={flavor.image} alt={flavor.name} />
            </div>
          </div>
        ))}
      </div>

      {subscriptionType === 'double' && (
        <div className="secondary-flavor">
          <h4>Choose Second Flavor</h4>
          <div className="flavor-options">
            {flavors.map((flavor) => (
              <div
                key={`secondary-${flavor.id}`}
                className={`flavor-option ${selectedFlavors.secondary === flavor.id ? 'selected' : ''}`}
                onClick={() => onFlavorChange('secondary', flavor.id)}
              >
                <div className="flavor-radio">
                  <input
                    type="radio"
                    name="secondary-flavor"
                    value={flavor.id}
                    checked={selectedFlavors.secondary === flavor.id}
                    onChange={() => onFlavorChange('secondary', flavor.id)}
                  />
                </div>
                <span className="flavor-name">{flavor.name}</span>
                <div className="flavor-image">
                  <img src={flavor.image} alt={flavor.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FlavorSelector
