import React from 'react'
import styles from './NavLink.module.css'
import { NavLink as RouterNavLink } from 'react-router-dom';


/**
 * @component NavLink
 * @description A custom navigation link component that wraps React Router's NavLink to apply specific styles for active and inactive states using CSS Modules
 * * @param {object} props - The component's props
 * @param {string} props.to - The path the link should navigate to
 * @param {React.ReactNode} props.children - The content to be displayed inside the link, typically text
 * * @returns {JSX.Element} A styled NavLink from react-router-dom
 */
function NavLink({ to, children }) {
    return (
        <RouterNavLink
            to={to}
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
            {children}
        </RouterNavLink>
    )
}

export default NavLink
