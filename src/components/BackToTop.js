"use client";

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './BackToTop.css';

const BackToTop = ({ introRef }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollEl = document.querySelector('main.scroll-wrapper') || window;
        const handleScroll = () => {
            const scrollTop = scrollEl === window ? window.scrollY : scrollEl.scrollTop;
            setVisible(scrollTop > 300);
        };
        scrollEl.addEventListener('scroll', handleScroll);
        return () => scrollEl.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToIntro = (event) => {
        event.stopPropagation();
        if (introRef.current) {
            introRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error("introRef is null");
        }
    };

    return (
        <button id="backToTop" className={visible ? 'visible' : ''} onClick={scrollToIntro}>
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    );
};

export default BackToTop;