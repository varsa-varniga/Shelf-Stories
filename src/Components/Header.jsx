import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./../styles/Header.css"; 
import logo from "../assets/logo.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faMagnifyingGlass, faHeart, faShoppingCart, faUser, faSignOutAlt, faUserCircle, faBoxOpen } from '@fortawesome/free-solid-svg-icons';  

const Header = () => {
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();  
  const profileRef = useRef(null);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${query}`); 
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="logo-search-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Shelf Stories Logo" className="logo-icon" />
        </Link>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search books by title, author, or ISBN"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className="icons">
          <div>
            <h3>HI READER</h3>
            <span>Log In</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} /><br />
            <span>Wishlist</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} /><br />
            <span>Cart</span>
          </div>

          <div className="profile-section" ref={profileRef}>
            <FontAwesomeIcon 
              icon={faUser} 
              className="profile-icon" 
              onClick={() => setProfileOpen(!profileOpen)} 
            />
            {profileOpen && (
              <div className="profile-dropdown">
                <Link to="/profile"><FontAwesomeIcon icon={faUserCircle} /> My Profile</Link>
                <Link to="/orders"><FontAwesomeIcon icon={faBoxOpen} /> My Orders</Link>
                <Link to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/gift-guides" className="nav-link">Gift Guides</Link>
        <Link to="/featured" className="nav-link">Featured</Link>
        <Link to="/books" className="nav-link">Books</Link>
        <Link to="/collectibles" className="nav-link">Collectible Books</Link>
        <Link to="/entertainment" className="nav-link">Entertainment</Link>
        <Link to="/gifts" className="nav-link">Gifts</Link>
        <Link to="/e-cards" className="nav-link">e-Cards</Link>

        <div className="nav-link dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span>Categories</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/category1">Category 1</Link>
              <Link to="/category2">Category 2</Link>
              <Link to="/category3">Category 3</Link>
            </div>
          )}
        </div>
        
        <Link to="/cart" className="nav-link">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
