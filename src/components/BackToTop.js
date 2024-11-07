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
            <i className="fa-solid fa-chevron-up"></i>
        </button>
    );
};

export default BackToTop;