import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import ServiceNavItem from '../ServiceNavItem/ServiceNavItem'
import styles from './ServiceNavigationBar.module.css'
import Section from '../Section/Section'
import { useItems } from './../../context/ItemsContext.jsx';

function ServiceNavigationBar({ staticItems = null }) {
    const { items: dashboardItems } = useItems();
    const items = staticItems || dashboardItems;

    return (
        <Section className={`${styles.ServiceNavigationBar}`}>
            <BaseCard className={styles.cards}>
                {items.map((item) => (
                    <ServiceNavItem
                        title={item.title}
                        icon={item.icon}
                        key={item.id}
                    />
                ))}
            </BaseCard>
        </Section>
    )
}

export default ServiceNavigationBar
