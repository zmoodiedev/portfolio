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
            <div id="logo">
                <a href="#home">Zach Moodie</a>
            </div>
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