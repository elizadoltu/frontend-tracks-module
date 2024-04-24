import React from "react";
import "../styles/attractions-card-style.css";

const CategoryCard = ({ categoryName, attractions, picture }) => {
  return (
    <div className="main-container-category">
      <div className="category-header">
        <h2>{categoryName}</h2>
        <img src={picture} alt="Category" className="category-picture" />
      </div>
      <ul className="attractions-list">
        {attractions.map((attraction, index) => (
          <li key={index}>
            <div className="category-card-item">
              <p>{attraction.name}</p>
              <p className="attraction-distance">{attraction.distance} m</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
