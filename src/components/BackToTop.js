"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './BackToTop.css';

const BackToTop = ({ introRef }) => {
    const scrollToIntro = (event) => {
        event.stopPropagation();
        if (introRef.current) {
            introRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error("introRef is null");
        }
    };

    return (
        <button id="backToTop" onClick={scrollToIntro}>
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    );
};

export default BackToTop;