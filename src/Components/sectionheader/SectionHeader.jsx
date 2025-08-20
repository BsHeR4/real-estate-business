import React from 'react';
import './SectionHeader.css';
import IconStar from '../IconStar/IconStar';
import clsx from 'clsx';
import { motion } from 'framer-motion';

/**
 * SectionHeader component
 *
 * @component
 * @description A reusable header component for page sections. 
 * Displays a title, an optional subtitle, and an optional star icon.
 *
 * @param {object} props - The component props.
 * @param {string} props.title - The main title text (required).
 * @param {string} [props.subtitle] - Optional subtitle text.
 * @param {boolean} [props.showIcon=true] - Controls visibility of the star icon.
 * @param {string} [props.className] - Additional class names for the container.
 * @param {string} [props.titleClassName] - Additional class names for the title element.
 * @param {string} [props.subtitleClassName] - Additional class names for the subtitle element.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props.props] - Additional props passed to the root <div>.
 *
 * @returns {JSX.Element} The rendered section header.
 *
 * @example
 * // With icon (default)
 * <SectionHeader
 *   title="Our Services"
 *   subtitle="Explore our offerings"
 * />
 *
 * @example
 * // Without icon
 * <SectionHeader
 *   title="Contact Us"
 *   subtitle="We are here to help"
 *   showIcon={false}
 * />
 */

const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const SectionHeader = ({
    title,
    subtitle,
    showIcon = true,
    className = '',
    titleClassName = '',
    subtitleClassName = '',
    ...props
}) => {
    const containerClasses = clsx('section-header', className);
    const titleClasses = clsx('section-title', titleClassName);
    const subtitleClasses = clsx('section-subtitle', subtitleClassName);

    return (
        <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={containerClasses} {...props}
        >

            {showIcon &&
                <motion.div variants={itemVariants}>
                    <IconStar className="star-icon" />
                </motion.div>
            }
            <motion.h1 variants={itemVariants} className={titleClasses}>{title}</motion.h1>
            {subtitle && <motion.p variants={itemVariants} className={subtitleClasses}>{subtitle}</motion.p>}
        </motion.div>
    );
};

export default SectionHeader;