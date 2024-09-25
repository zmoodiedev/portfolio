import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import SectionDots from './components/SectionDots';
import MainContent from './components/MainContent';
import './_reset.css';
import './App.css';

const App = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  const handleSectionInView = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = sectionRefs.current.indexOf(entry.target);
        setActiveIndex(index);
      }
    });
  };

  useEffect(() => {

    const currentSections = sectionRefs.current;

    const observer = new IntersectionObserver(handleSectionInView, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    });

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { id: 1, name: 'Intro', path: 'intro' },
    { id: 2, name: 'About Me', path: 'about' },
    { id: 3, name: 'Blog', path: 'blog' },
    { id: 4, name: 'Projects', path: 'projects' },
    { id: 5, name: 'Contact Me', path: 'contact' },
];

  return (
    <div className="main-container">
      
      <Header activeIndex={activeIndex} navItems={navItems} />

      <SectionDots activeIndex={activeIndex} navItems={navItems} />

      <MainContent sectionRefs={sectionRefs} />

    </div>
  );
}

export default App;
