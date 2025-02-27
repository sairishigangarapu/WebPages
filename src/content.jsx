import { useState } from 'react';

function Content() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Add your image URLs here
    //ai generated pls learn the logics
    const images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
        // Add more image URLs as needed
    ];

    const toggleSidebar = () => 
        setIsCollapsed(!isCollapsed);

    const nextSlide = () => {
        setCurrentSlide(current => 
            current === images.length - 1 ? 0 : current + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(current => 
            current === 0 ? images.length - 1 : current - 1
        );
    };

    return (
        <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
            <h1>Content Area</h1>
            <div className="carousel">
                <button className="carousel-btn prev" onClick={prevSlide}>
                    &#8249;
                </button>
                <img 
                    src={images[currentSlide]} 
                    alt={`Slide ${currentSlide + 1}`}
                    className="carousel-image"
                />
                <button className="carousel-btn next" onClick={nextSlide}>
                    &#8250;
                </button>
            </div>
        </div>
    );
}

export default Content;