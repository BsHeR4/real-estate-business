import React from 'react'
import './BaseCard.css'

const BaseCard = ({children, padding}) => {
    const paddingClass = padding === 'large' ? 'mk-large-padding' : 'mk-medium-padding'
    return (
        <div className={`mk-card ${paddingClass} mk-small-padding` }>
            {children}
        </div>
    )
}
export default BaseCard
