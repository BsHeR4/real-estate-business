import React from 'react';
import styles from './StatItem.module.css';

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

/**
 * @component StatItem
 * @description A simple component to display a single statistic, consisting of a large number and a descriptive label.
 *
 * @param {object} props - The component's props.
 * @param {string} props.number - The statistic value to display (e.g., "200+", "10k+").
 * @param {string} props.label - The text label describing the statistic.
 * @returns {JSX.Element} A styled div containing the statistic.
 *
 * @example
 * <StatItem number="200+" label="Happy Customers" />
 */
const StatItem = ({ number, label }) => {
    const targetNumber = parseInt(number.replace('k', '000').replace('+', ''));
    const count = useMotionValue(0)
    const formattedValue = useTransform(count, (latest) => {
        const rounded = Math.round(latest);

        if (targetNumber >= 1000) {
            // If the target is in the thousands, divide and add 'k+'
            return `${Math.round(rounded / 1000)}k+`;
        } else {
            // Otherwise, just add '+'
            return `${rounded}+`;
        }
    });

    useEffect(() => {
        const controls = animate(count, targetNumber, { duration: 3.5, ease: "easeOut" })
        return () => controls.stop()
    }, [])
    return (
        <div className={styles.statItem}>
            <motion.p className={styles.number}>{formattedValue}</motion.p>
            <p className={styles.label}>{label}</p>
        </div>
    );
};

export default StatItem;