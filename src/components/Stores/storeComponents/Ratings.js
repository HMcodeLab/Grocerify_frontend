import React from "react";
import "../FeaturedStore.css";

const Ratings = () => {
  return (
    <div className="rating">
      <div className="rating-text">
        <h3>Rating</h3>
        {/* <h4>
          Show More <span className="arrow-down-icon">&#9660;</span>
        </h4> */}
      </div>
      <div className="img-rating">
        <div className="ratingimg">
          <img src="../assests/images/ratingimg1.svg" />
          <div className="name-rating">
            <h4>Nemo enim</h4>
            <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis…”
          </p>
        </div>
        <div className="ratingimg">
          <img src="../assests/images/ratingimg2.svg" />
          <div className="name-rating">
            <h4>Amlo Sinha</h4>
            <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>
          </div>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis…”
          </p>
        </div>
        <div className="ratingimg">
          <img src="../assests/images/ratingimg3.svg" />
          <div className="name-rating">
            <h4>Mauscosf</h4>
            <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis…”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
