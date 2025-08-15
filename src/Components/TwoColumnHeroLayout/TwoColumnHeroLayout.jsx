import React from 'react';
import clsx from 'clsx';
import styles from './TwoColumnHeroLayout.module.css';

/**
 * @component TwoColumnLayout
 * * @description A reusable layout component that arranges its content into two columns on large screens
 * and a single column on smaller screens.
 * * @param {object} props - The component's props
 * @param {React.ReactNode} props.leftColumn - The content to be rendered in the left column.
 * @param {React.ReactNode} props.rightColumn - The content to be rendered in the right column.
 * @param {string} [props.className] - Additional CSS classes for custom styling.
 * * @returns {JSX.Element} A styled <div> element that acts as a two-column container.
 */
const TwoColumnLayout = ({ leftColumn, rightColumn, className }) => {
    const layoutClasses = clsx(styles.layout, className);

    return (
        <div className={layoutClasses}>
            {/* Left Column*/}
            <div>
                {leftColumn}
            </div>

            {/* Right Column*/}
            <div>
                {rightColumn}
            </div>
        </div>
    );
};

export default TwoColumnLayout;