import React, { useState } from "react";
import "./../styles/Header.css"; 
import logo from "../assets/logo.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faMagnifyingGlass , faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';  

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      {/* Logo and Search Bar Section (Horizontal) */}
      <div className="logo-search-container">
        <div className="logo">
          <img src={logo} alt="Shelf Stories Logo" className="logo-icon" />
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search books by title, author, or ISBN"
            className="search-input"
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

<div className="icons">
    <div>
        <h3>HI READER</h3>
        <span>Log In</span>
    </div>
    <div  >
        <FontAwesomeIcon icon={faHeart} /><br />
        <span>Wishlist</span>
   
    </div>

    <div >
        <FontAwesomeIcon icon={faShoppingCart} /><br />
        <span>Cart</span>
     
    </div>
</div>




      </div>


      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#" className="nav-link">Gift Guides</a>
        <a href="#" className="nav-link">Featured</a>
        <a href="#" className="nav-link">Books</a>
        <a href="#" className="nav-link">Collectible books</a>
        <a href="#" className="nav-link">Entertainement</a>
        <a href="#" className="nav-link">Gifts</a>
        <a href="#" className="nav-link">e-cards</a>


        
        {/* Dropdown */}
        <div className="nav-link dropdown" onClick={toggleDropdown}>
          <span>Categories</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#">Category 1</a>
              <a href="#">Category 2</a>
              <a href="#">Category 3</a>
            </div>
          )}
        </div>
        
        <a href="#" className="nav-link">Cart</a>
      </nav>
    </header>
  );
};

export default Header;
