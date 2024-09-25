import React from "react";
import './SectionDots.css';

const SectionDots = ({ activeIndex, navItems }) => {

    return (
        
        <aside id="sectionDots">
            <ul>
                {navItems.map((item, index) => (
                <li
                    key={item.id}
                    className={`section-dot ${activeIndex === index ? 'active' : ''}`}
                >
                    <a
                    href={`#${item.name.toLowerCase().replace(/\s+/g, '')}`}
                    aria-label={item.name}></a>
                </li>
                ))}
            </ul>
        </aside>
    )
};

export default SectionDots;