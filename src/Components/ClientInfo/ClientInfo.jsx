import clsx from 'clsx'
import styles from './ClientInfo.module.css';
import React from 'react'

/**
 * @component ClientInfo
 * @description A small component to display a single piece of client information with an icon, title, and text
 * * @param {object} props - The component's props
 * @param {string} props.title - The title of the information (e.g., 'Domain')
 * @param {string} props.info - The information text to display
 * @param {React.ReactNode} props.icon - The icon component to display
 * @param {string} [props.className] - Optional additional classes for custom styling
 * @param {boolean} [props.leftBorder=false] - If true, adds a left border style for separation
 * * @returns {JSX.Element} A styled div displaying the client info
 */
function ClientInfo({ title, info, icon, className, leftBorder = false }) {

    const classes = clsx(
        styles.container,
        className,
        { [styles.leftBorder]: leftBorder },
    );
    return (
        <div className={classes}>
            <div>
                {icon}
                <span>{title}</span>
            </div>
            <p>{info}</p>
        </div>
    )
}

export default ClientInfo
