import React, { useRef } from "react";
import "./../styles/Bestsellers.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';  

const Bestsellers = ({ heading, books = [] }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.5; 
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.5; 
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bestsellers-container">
      <h2 className="bestsellers-heading">{heading}</h2>
      
      <button className="carousel-arrow left-arrow" onClick={scrollLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      
      <div className="books-scroll" ref={scrollRef}>
        {books.length > 0 ? (
          books.map((book, index) => (
            <div className="books-card" key={index}>
              <img 
                src={book.img || "default_cover.jpg"} 
                alt={book.title || "Unknown Book"} 
                className="books-image" 
                loading="lazy"
              />
              <h3 className="books-title">{book.title || "Untitled"}</h3>
              <p className="books-author">{book.author || "Unknown Author"}</p>
              <p className="books-rating">
                {Array.from({ length: 5 }, (_, i) =>
                  i < book.rating ? "★" : "☆"
                )}
              </p>
            </div>
          ))
        ) : (
          <p className="no-books-message">No books found.</p>
        )}
      </div>

      <button className="carousel-arrow right-arrow" onClick={scrollRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Bestsellers;
