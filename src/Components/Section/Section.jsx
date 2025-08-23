import clsx from 'clsx';
import React from 'react'
import styles from './Section.module.css';

/**
 * @component Section Component
 * 
 * @description A reusable wrapper component used to organize content into sections, providing consistent padding and width
 * 
 * @param {object} props - The component's props
 * @param {React.ReactNode} props.children - The content or components to be rendered inside the section
 * @param {string} [props.className] - Additional CSS classes that can be passed to customize the default styling
 *
 * @returns {JSX.Element} A styled <section> element containing the children
 */
function Section({ children, id, className }) {

    const sectionClasses = clsx(
        styles.section,
        className,
    );

    return (
        <section className={sectionClasses} id={id}>
            {children}
        </section>
    )
}

export default Section
