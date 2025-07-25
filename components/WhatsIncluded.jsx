import React from 'react'
import '../styles/WhatsIncluded.css'

const WhatsIncluded = ({ subscriptionType, content }) => {
  const currentContent = content[subscriptionType]

  return (
    <div className="whats-included">
      <h3>What's Included:</h3>
      
      <div className="delivery-options">
        <div className="delivery-option">
          <h4>Every 30 Days</h4>
          <div className="included-items">
            {currentContent.thirtyDays.map((item, index) => (
              <img key={index} src={item} alt={`Included item ${index + 1}`} />
            ))}
          </div>
        </div>
        
        <div className="delivery-option">
          <h4>One Time (Free)</h4>
          <div className="included-items">
            {currentContent.oneTime.map((item, index) => (
              <img key={index} src={item} alt={`One time item ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="benefits-list">
        {currentContent.benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <img src={benefit.icon} alt="" className="benefit-icon" />
            <span>{benefit.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatsIncluded
