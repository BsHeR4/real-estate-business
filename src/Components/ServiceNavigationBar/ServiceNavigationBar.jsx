import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import ServiceNavItem from '../ServiceNavItem/ServiceNavItem'
import styles from './ServiceNavigationBar.module.css'
import Section from '../Section/Section'
import { useItems } from './../../context/ItemsContext.jsx';
import { motion } from 'framer-motion';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

function ServiceNavigationBar({ staticItems = null, sectionId, directAnimation = false }) {

    const animationProps = {
        initial: "hidden",
        viewport: { once: true }
    };

    if (directAnimation) {
        animationProps.animate = "visible";
    } else {
        animationProps.whileInView = "visible";
    }


    const { items: dashboardItems } = useItems();
    const items = staticItems ? staticItems : dashboardItems;

    return (
        <Section id={sectionId} className={`${styles.ServiceNavigationBar}`}>
            <motion.div
                variants={containerVariants}
                {...animationProps}
            >
                <BaseCard className={styles.cards}>
                    {items.map((item) => (
                        <motion.div variants={itemVariants}
                            whileHover={{ scale: 1.05, y: 0 }}>
                            <ServiceNavItem
                                title={item.title}
                                icon={item.icon}
                                key={item.id}
                            />
                        </motion.div>
                    ))}
                </BaseCard>
            </motion.div>
        </Section>
    )
}

export default ServiceNavigationBar
