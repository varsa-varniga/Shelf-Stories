import React from "react";
import "./../styles/Footer.css";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Shelf Stories</h2>
          <p>
            Embark on a literary journey with Kitabay, the online book
            wonderland nestled in Jaipur since 2018. We take pride in being
            sustainable and eco-friendly – from new releases to treasured
            pre-loved books. And wait, there's more! Dive into the sea of
            bookish merchandise that'll make any bookworm's heart flutter. Join
            Shelf Stories and let sustainable reading ignite your imagination!
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="subscribe">
            <input
              type="email"
              placeholder="Subscribe to emailer"
              className="subscribe-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="footer-section links">
          <h3>Brand Story</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Shop Now</h3>
          <ul>
            <li><a href="#">Books</a></li>
            <li><a href="#">Mystery Box</a></li>
            <li><a href="#">Merchandise</a></li>
            <li><a href="#">Gifting</a></li>
            <li><a href="#">Bulk</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Policies</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Payments & Refunds</a></li>
            <li><a href="#">T&C</a></li>
            <li><a href="#">Track Your Order</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright | All Rights Reserved,Shelf Stories.com
        </p>
        {/* <p>Varniga Corp</p> */}
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
