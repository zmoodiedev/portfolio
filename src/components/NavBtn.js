"use client";

import React from 'react';

const NavBtn = ({ toggleNav, isActive }) => {
    return (
        <div id="navBtn">
            <label htmlFor="brgr">
                <input
                    type="checkbox"
                    id="brgr"
                    checked={isActive}
                    onChange={toggleNav}
                />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    )
}

export default NavBtn;