import React from "react";
import "./../styles/Hero.css"; 

import book_stack from "../assets/book_stack.jpg"; 
import mobile from "../assets/mobile.png";

const Hero = () => {
  return (
    <>
     
    <div className="hero-section">
    <div className="hero-text">
  <h1 className="hero-title">Discover the World of Books</h1>
  <p className="hero-description">
    Uncover your next great read at <strong>Shelf Stories</strong>. <br />
     Explore our curated collection and ignite your imagination.
  </p>
  <button className="hero-button">Start Exploring</button>
</div>

  
       <div className="hero-images">
      <div className="books">
          <img src={book_stack} alt="Books display" />
        </div>
      
      </div> 
    </div> 
   
  </>
  
  );
};

export default Hero;
