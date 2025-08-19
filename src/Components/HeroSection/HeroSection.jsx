import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import StatItem from '../StatItem/StatItem';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';

function HeroSection({ data, variant }) {
    if (!data) {
        return null;
    }

    const {
        title,
        subtitle,
        titleClassName,
        subtitleClassName,
        buttons = [],
        stats = [],
        image,
        showStar = false
    } = data;

    const containerClasses = `${styles.heroLayout} ${variant === 'about' ? styles.aboutVariant : ''}`;

    return (
        <div className={containerClasses}>
            <div className={styles.leftColumn}>
                <SectionHeader
                    title={title}
                    subtitle={subtitle}
                    showIcon={showStar}
                    titleClassName={titleClassName}
                    subtitleClassName={subtitleClassName}
                />

                <div className={styles.buttonsContainer}>
                    {buttons.map((button) => (
                        <Link to={button.link} key={button.id}>
                            <Button variant={button.variant} size="small" className="as-button-full-width">
                                {button.text}
                            </Button>
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
}

export default HeroSection;