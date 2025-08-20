import React from 'react'
import styles from './PropertyCard.module.css';
import BaseCard from './../BaseCard/BaseCard'
import Button from './../Button/Button'
import PropertyFeature from '../PropertyFeature/PropertyFeature';
import { IoBed } from 'react-icons/io5';
import Bathtub from './../../assets/icons/bathtub.svg?react';
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { motion } from 'framer-motion';
/**
 * @component PropertyCard
 * @description A card component to display a summary of a single property listing
 * * @param {object} props - The component's props
 * @param {string} props.img - The URL of the property's main image
 * @param {string} props.title - The title or name of the property
 * @param {string} props.subtitle - A short description of the property
 * @param {string} props.price - The formatted price of the property (e.g., '$550,000')
 * @param {string|number} props.bedrooms - The number of bedrooms
 * @param {string|number} props.bathrooms - The number of bathrooms
 * @param {string} [props.buildType='Villa'] - The type of the property (e.g., Villa, Apartment)
 * * @returns {JSX.Element} A styled card displaying the property information
 */
function PropertyCard({ itemVariant, img, title, subtitle, price, bedrooms, bathrooms, buildType = 'Villa' }) {

    return (
        <motion.div
            variants={itemVariant}
            whileHover={{ scale: 1.03, y: -5 }}
        >
            <BaseCard className={styles.baseContainer}>
                <img src={img} alt="" className={styles.cardImage} />
                <h2>{title}</h2>
                <p>{subtitle}<span>Read More</span></p>

                <div className={styles.properties}>
                    <PropertyFeature icon={<IoBed />}>{bedrooms}-BedRoom</PropertyFeature>
                    <PropertyFeature icon={<Bathtub />}>{bathrooms}-Bathroom</PropertyFeature>
                    <PropertyFeature icon={<HiMiniBuildingOffice />}>{buildType}</PropertyFeature>
                </div>

                <div className={styles.container}>
                    <div className={styles.priceContainer}>
                        <span className={styles.priceTitle}>Price</span>
                        <span className={styles.price}>{price}</span>
                    </div>
                    <Button size={'small'} fullWidth={'true'}>View Property Details</Button>
                </div>
            </BaseCard>
        </motion.div>
    )
}

export default PropertyCard
