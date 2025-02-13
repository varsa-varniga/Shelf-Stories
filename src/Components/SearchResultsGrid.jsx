import React from "react";
import "./../styles/SearchResultsGrid.css";

const SearchResultsGrid = ({ heading, books }) => {
  return (
    <div className="search-results-container">
      <h2 className="search-results-heading">{heading}</h2>
      {books.length === 0 ? (
        <p className="no-books">No books found</p>
      ) : (
        <div className="books-grid">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
              <img src={book.img} alt={book.title} className="book-image" />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-rating">
                {"★".repeat(book.rating)}{"☆".repeat(5 - book.rating)}
              </p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsGrid;
