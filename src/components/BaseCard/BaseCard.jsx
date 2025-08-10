import React from 'react'
import './BaseCard.css'

/**
 * BaseCard Component
 *
 * A reusable base card component that provide padding options.
 *
 * Props:
 * - children (node): Content to be displayed inside the card.
 * - padding (string): Padding size ('large' or 'medium').
 *
 * Usage:
 * <BaseCard padding='large' -> 'for desktop padding 50px, 40px on laptops and 30px for mobiles and taps'  |  padding='medium' -> 'for desktop padding 40px, 30px on laptops and 24px for mobiles and taps'>
 *   <h2>Card Title</h2>
 *   <p>Card content</p>
 * </BaseCard>
 *
 * Dependencies:
 * - BaseCard.css: Styling module
 */
const BaseCard = ({children, padding,className}) => {
    const paddingClass = padding === 'large' ? 'mk-large-padding' : 'mk-medium-padding'
    return (
        <div className={`mk-card ${paddingClass} ${className}`}>
            {children}
        </div>
    )
}
export default BaseCard
