import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../../Components/Logo/Logo'
import NavLink from '../NavLink/NavLink'
import Button from '../Button/Button'
import { NavLink as RouterNavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
function Navbar() {
    return (
        <nav>
            <Logo />
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/AboutUs'}>About Us</NavLink></li>
                <li><NavLink to={'/PropertyDetails'}>Properties</NavLink></li>
                <li><NavLink to={'/Services'}>Services</NavLink></li>
            </ul>
            <RouterNavLink to={'/Contact'}>
                {
                    ({ isActive }) => (
                        <Button size={'small'} variant={isActive ? 'primary' : 'secondary'} className={'py-16'}>Contact Us</Button>
                    )
                }
            </RouterNavLink>
            <HiOutlineMenuAlt3 />
        </nav>
    )
}

export default Navbar
