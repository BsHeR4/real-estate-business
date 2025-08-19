import React from 'react'
import styles from './ServiceNavItem.module.css'
import BaseCard from '../BaseCard/BaseCard'
import Arrow from './../../../public/assets/imgs//arrow-icon.svg?react'

function ServiceNavItem({ title, icon }) {
    return (
        <BaseCard className={styles.serviceNavItem}>
            <Arrow />
            <img src={icon} alt={title} />
            <p>{title}</p>
        </BaseCard>
    )
}

export default ServiceNavItem
