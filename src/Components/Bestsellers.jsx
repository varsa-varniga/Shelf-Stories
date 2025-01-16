import React, { useRef } from "react";
import "./../styles/Bestsellers.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';  

const Bestsellers = ({heading, books }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300, // Adjust for scrolling left
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300, // Adjust for scrolling right
      behavior: "smooth",
    });
  };

  return (
    <div className="bestsellers-container">
      <h2 className="bestsellers-heading">{heading}</h2>
      <button className="carousel-arrow left-arrow" onClick={scrollLeft}>
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="books-scroll" ref={scrollRef}>
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.img} alt={book.title} className="book-image" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <p className="book-rating">
              {"★".repeat(book.rating)}{"☆".repeat(5 - book.rating)}
            </p>
          </div>
        ))}
      </div>
      <button className="carousel-arrow right-arrow" onClick={scrollRight}>
      <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Bestsellers;
