import React from 'react'
import './BaseCard.css'

const BaseCard = ({children, padding, className}) => {
    const paddingClass = padding === 'large' ? 'mk-large-padding' : 'mk-medium-padding'
    return (
        <div className={`mk-card ${className} ${paddingClass}`}>
            {children}
        </div>
    )
}
export default BaseCard
