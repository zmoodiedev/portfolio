"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "../src/components/Header";
import SectionDots from "../src/components/SectionDots";
import MainContent from "../src/components/MainContent";

export default function Home() {
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
      rootMargin: "0px",
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
    { id: 1, name: "Intro", path: "intro" },
    { id: 2, name: "About Me", path: "aboutme" },
    { id: 3, name: "Projects", path: "projects" },
    { id: 4, name: "Contact Me", path: "contactme" },
  ];

  return (
    <div className="main-container">
      <Header activeIndex={activeIndex} navItems={navItems} />
      <SectionDots activeIndex={activeIndex} navItems={navItems} />
      <MainContent sectionRefs={sectionRefs} />
    </div>
  );
}
