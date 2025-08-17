import React from 'react'
import BaseCard from './../BaseCard/BaseCard'
import styles from './ServiceFeatureCard.module.css'
import clsx from 'clsx';

function ServiceFeatureCard({ icon, title, description, className }) {

    const classes = clsx(
        styles.ServiceFeatureCard,
        className,
    );

    return (
        <BaseCard className={classes}>
            <div className={styles.container}>
                {icon}
                <h3>{title}</h3>
            </div>

            <p>{description}</p>
        </BaseCard>
    )
}

export default ServiceFeatureCard
