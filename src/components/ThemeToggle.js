"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  return (
    <div className="theme-toggle-wrapper">
      <label className="theme-toggle" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={!isDark}
          onChange={toggleTheme}
        />
        <div className="slider round">
          <span className="icon dark-mode"><FontAwesomeIcon icon={faMoon} /></span>
          <span className="icon light-mode"><FontAwesomeIcon icon={faSun} /></span>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;