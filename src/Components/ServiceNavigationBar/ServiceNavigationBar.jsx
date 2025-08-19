import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import ServiceNavItem from '../ServiceNavItem/ServiceNavItem'
import styles from './ServiceNavigationBar.module.css'
import Section from '../Section/Section'

function ServiceNavigationBar({ items }) {
    return (
        <Section className={`${styles.ServiceNavigationBar}`}>
            <BaseCard className={styles.cards}>
                {items.map((item, index) => (
                    <ServiceNavItem
                        title={item.title}
                        icon={item.icon}
                        key={index}
                    />
                ))}
            </BaseCard>
        </Section>
    )
}

export default ServiceNavigationBar
