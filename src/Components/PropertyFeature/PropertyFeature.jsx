import React from 'react'
import styles from './PropertyFeature.module.css';

/**
 * @component PropertyFeature
 * @description A component to display a single property feature with an icon and text (e.g., bedrooms, bathrooms)
 * * @param {object} props - The component's props
 * @param {React.ReactNode} props.icon - The icon component to be displayed on the left
 * @param {React.ReactNode} props.children - The text content to be displayed on the right
 * * @returns {JSX.Element} A styled div containing the icon and text
 */
function PropertyFeature({ icon, children, className}) {
    return (
        <div className={`${styles.propertyFeature} ${className || ''}`}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.paragraph}>{children}</span>
        </div>
    )
}

export default PropertyFeature
