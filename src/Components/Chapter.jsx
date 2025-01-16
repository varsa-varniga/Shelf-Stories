import React from "react";
import "./../styles/Chapter.css";

const Chapter = () => {
  return (
    <div className="chapter-section">
      <div className="text-container1">
        <h1>Start Your Next Chapter</h1>
        <h3>New Year, New You</h3>
        <button className="shop-now-btn1">Shop Now</button>
      </div>
      <div className="chapter-image">
        <img src="chapter.png" alt="new arrivals" />

      </div>
    </div>
  );
};

export default Chapter;
