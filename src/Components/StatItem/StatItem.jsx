import React from 'react';
import styles from './StatItem.module.css';

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
    return (
        <div className={styles.statItem}>
            <p className={styles.number}>{number}</p>
            <p className={styles.label}>{label}</p>
        </div>
    );
};

export default StatItem;