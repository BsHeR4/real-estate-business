import React from 'react'
import BaseCard from '../BaseCard/BaseCard'
import ServiceNavItem from '../ServiceNavItem/ServiceNavItem'
import styles from './ServiceNavigationBar.module.css'
import Section from '../Section/Section'
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

function ServiceNavigationBar({ items, className, baseCardClassName, directAnimation = false }) {
    const animationProps = {
        initial: "hidden",
        viewport: { once: true }
    };

    if (directAnimation) {
        animationProps.animate = "visible";
    } else {
        animationProps.whileInView = "visible";
    }

    return (
        <Section className={`${styles.ServiceNavigationBar} ${className}`}>
            <motion.div
                variants={containerVariants}
                {...animationProps}
            >
                <BaseCard className={`${styles.cards} ${baseCardClassName}`}>
                    {items.map((item, index) => (
                        <motion.div variants={itemVariants}
                            whileHover={{ scale: 1.05, y: 0 }}>
                            <ServiceNavItem
                                title={item.title}
                                icon={item.icon}
                                key={index}
                            />
                        </motion.div>
                    ))}
                </BaseCard>
            </motion.div>
        </Section>
    )
}

export default ServiceNavigationBar
