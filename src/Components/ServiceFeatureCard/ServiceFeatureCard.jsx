import React from 'react'
import BaseCard from './../BaseCard/BaseCard'
import styles from './ServiceFeatureCard.module.css'

function ServiceFeatureCard({ icon, title, description }) {
    return (
        <BaseCard className={styles.ServiceFeatureCard}>
            <div className={styles.container}>
                {icon}
                <h3>{title}</h3>
            </div>

            <p>{description}</p>
        </BaseCard>
    )
}

export default ServiceFeatureCard
