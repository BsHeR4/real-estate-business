import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../../Components/Logo/Logo'
import NavLink from '../NavLink/NavLink'
import Button from '../Button/Button'
import { NavLink as RouterNavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from 'framer-motion'

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

function Navbar() {
    return (
        <motion.nav>
            <Logo />
            <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.li variants={itemVariants}><NavLink to={'/'}>Home</NavLink></motion.li>
                <motion.li variants={itemVariants}><NavLink to={'/PropertyDetails'}>Properties</NavLink></motion.li>
                <motion.li variants={itemVariants}><NavLink to={'/AboutUs'}>About Us</NavLink></motion.li>
                <motion.li variants={itemVariants}><NavLink to={'/Services'}>Services</NavLink></motion.li>
            </motion.ul>
            <RouterNavLink to={'/Contact'}>
                {
                    ({ isActive }) => (
                        <Button size={'small'} variant={isActive ? 'primary' : 'secondary'} className={'py-16'}>Contact Us</Button>
                    )
                }
            </RouterNavLink>
            <HiOutlineMenuAlt3 />
        </motion.nav>
    )
}

export default Navbar
