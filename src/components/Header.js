"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import NavBtn from './NavBtn';
import './Header.css';

const Header = ({ activeIndex, navItems }) => {

    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(prev => !prev);
    }

    const closeNav = () => {
        setIsNavActive(false);
    }

    return (
        <header>
            <Navbar
                isActive={isNavActive}
                activeIndex={activeIndex}
                navItems={navItems}
                closeNav={closeNav}
            />
            <NavBtn toggleNav={toggleNav} isActive={isNavActive} />
        </header>
    )
}

export default Header;