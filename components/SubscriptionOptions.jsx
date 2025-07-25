import React from 'react'
import '../styles/SubscriptionOptions.css'

const SubscriptionOptions = ({ selected, onChange, pricing }) => {
  const singlePrice = selected === 'single' ? pricing.current : 6.00
  const doublePrice = selected === 'double' ? pricing.current : 12.00
  const singleOriginal = 10
  const doubleOriginal = 20

  return (
    <div className="subscription-options">
      <div className="subscription-option recommended">
        <div className="option-header">
          <span className="recommended-badge">Recommended</span>
        </div>
        <div className="option-content">
          <div className="radio-group">
            <input
              type="radio"
              id="single-subscription"
              name="subscription"
              value="single"
              checked={selected === 'single'}
              onChange={() => onChange('single')}
            />
            <label htmlFor="single-subscription">
              Single Drink Subscription
            </label>
          </div>
          <div className="pricing">
            <span className="current-price">${singlePrice.toFixed(2)}</span>
            <span className="original-price">${singleOriginal}</span>
          </div>
        </div>
      </div>

      <div className="subscription-option">
        <div className="option-content">
          <div className="radio-group">
            <input
              type="radio"
              id="double-subscription"
              name="subscription"
              value="double"
              checked={selected === 'double'}
              onChange={() => onChange('double')}
            />
            <label htmlFor="double-subscription">
              Double Drink Subscription
            </label>
          </div>
          <div className="pricing">
            <span className="current-price">${doublePrice.toFixed(2)}</span>
            <span className="original-price">${doubleOriginal}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionOptions
