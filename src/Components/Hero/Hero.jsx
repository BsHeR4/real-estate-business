import React from 'react'
import Button from './../Button/Button'
import Section from './../Section/Section'
import StatItem from './../StatItem/StatItem'
import styles from './Hero.module.css'
import { motion } from 'framer-motion';
function Hero({ className }) {
    return (
        <Section id={'hero'} className={`${styles.hero} ${className}`}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}

                className={styles.container}>
                <div className={styles.textContainer}>
                    <h1>Discover Your Dream Property with Estatein</h1>
                    <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                </div>

                <div className={styles.buttons}>
                    <Button size='small' variant='secondary'>Learn More</Button>
                    <Button size='small' variant='primary'>Browse Properties</Button>
                </div>

                <div className={styles.statItems}>
                    <StatItem label='Happy Customers' number='200' />
                    <StatItem label='Properties For Clients' number='10000' />
                    <StatItem label='Years of Experience' number='16' />
                </div>
            </motion.div>
            <div className={styles.heroImgContainer}>
                <div className={styles.abstractImgContainer}>
                </div>
            </div>
        </Section>
    )
}

export default Hero
