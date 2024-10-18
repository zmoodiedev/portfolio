import React, { useEffect, useState } from 'react';
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
          <span className="icon dark-mode"><i className="fa-solid fa-moon"></i></span>
          <span className="icon light-mode"><i className="fa-solid fa-sun"></i></span>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;