import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import StatItem from '../StatItem/StatItem';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';

/**
 * @component HeroSection
 * @description The main hero component for the page. Renders content dynamically based on the data prop.
 *
 * @param {object} props - The component's props.
 * @param {object} props.data - An object containing all necessary data for the component.
 * @param {string} props.data.title - The main title text.
 * @param {string} props.data.subtitle - The subtitle text.
 * @param {boolean} [props.data.showStar=false] - Controls the visibility of the star icon in the header.
 * @param {Array<object>} [props.data.buttons=[]] - Optional array of button objects.
 * @param {Array<object>} [props.data.stats=[]] - Optional array of statistic objects.
 * @param {object} [props.data.image] - Optional image object.
 * @returns {JSX.Element | null} The hero component, or null if no data is provided.
 */
const HeroSection = ({ data }) => {
    if (!data) {
        return null;
    }

    const { title, subtitle, buttons = [], stats = [], image, showStar = false } = data;

    return (
        <div className={styles.heroLayout}>
            <div className={styles.leftColumn}>
                <SectionHeader
                    title={title}
                    subtitle={subtitle}
                    showIcon={showStar}
                    titleClassName="AS-hero-title"
                    subtitleClassName="AS-hero-subtitle"
                />

                <div className={styles.buttonsContainer}>
                    {buttons.map((button) => (
                        <Link to={button.link} key={button.id}>
                            <Button variant={button.variant} size="large" className="as-button-full-width">{button.text}</Button>
                        </Link>
                    ))}
                </div>
                <div className={styles.statsContainer}>
                    {stats.map((stat) => (
                        <StatItem key={stat.id} number={stat.number} label={stat.label} />
                    ))}
                </div>
            </div>

            {image && (
                <div className={styles.rightColumn}>
                    <img src={image.src} alt={image.alt} className={styles.heroImage} />
                </div>
            )}
        </div>
    );
};

export default HeroSection;