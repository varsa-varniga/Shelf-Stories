import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Assurity from "./Components/Assurity.jsx";
import Bestsellers from "./Components/Bestsellers.jsx";
import Footer from "./Components/Footer.jsx";
import bookCategories from "./data/books.jsx";
import SearchResultsGrid from "./Components/SearchResultsGrid.jsx";
import "./App.css";
const VITE_BOOKS_API_KEY = import.meta.env.VITE_BOOKS_API_KEY;



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </Router>
  );
};

// Home Page
const Home = () => (
  <main>
    <Hero />
    <Assurity />
    {bookCategories.map((category, index) => (
      <Bestsellers key={index} heading={category.heading} books={category.books} />
    ))} 
  </main>
);

// Search Results Page
const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query") || "";

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!searchQuery) return;

      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${VITE_BOOKS_API_KEY}`
        );
        const data = await response.json();
        if (data.items) {
          setBooks(data.items.map((book) => ({
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors?.[0] || "Unknown",
            rating: book.volumeInfo.averageRating || 0,
            img: book.volumeInfo.imageLinks?.thumbnail || "default_cover.jpg",
          })));
        } else {
          setBooks([]);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  return <SearchResultsGrid heading={`Search Results for "${searchQuery}"`} books={books} />;
};

export default App;
