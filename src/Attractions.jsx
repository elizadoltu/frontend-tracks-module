import React from "react";
import CategoryCard from "./components/CategoryCard";
import "./styles/main-page-style.css";
import "./styles/custom-variables.css";
import history from "./assets/svg/history.png";
import parks from "./assets/svg/parks.png";
import restaurant from "./assets/svg/restaurant.png";
import transport from "./assets/svg/transport.png";
import entertainment from "./assets/svg/entertainment.png";
import showmap from "./assets/svg/showmap.png";
import hotelsurroundings from "./assets/svg/hotelsurroudings.png";

const AttractionsPage = () => {
  const categories = [
    {
      categoryName: "Restaurants",
      picture : restaurant,
      attractions: [
        { name: "Tiki Bistro", distance: 40 },
        { name: "Citizen", distance: 20 },
        { name: "CitiZen Bistro & Lounge", distance: 20 },
        { name: "Beer Zone", distance: 280 },
      ],
    },
    {
      categoryName: "Entertainment",
      picture : entertainment,
      attractions: [
        { name: "Palas Mall", distance: 300 },
        { name: "Iulius Mall", distance: 1800 },
      ],
    },
    {
      categoryName: "History Attractions",
      picture : history,
      attractions: [
        { name: "Muzeul Unirii", distance: 1300 },
        { name: "Muzeul de Artă din Iași", distance: 220 },
        { name: "Muzeul Mihai Codreanu", distance: 1100 },
        { name: "Muzeul Pogromului de la Iași", distance: 290 },
      ],
    },
    {
      categoryName: "Transport",
      picture : transport,
      attractions: [
        { name: "Gara Iasi", distance: 2800 },
        { name: "Aeroportul International Iasi", distance: 6800 },
      ],
    },
    {
      categoryName: "Parks",
      picture : parks,
      attractions: [
        { name: "Parcul Teatrului Național", distance: 1100 },
        { name: "Parcul Palas", distance: 1100 },
        { name: "Parcul Elena Doamna", distance: 750 },
        { name: "Parcul Podu Roș", distance: 1300 },
      ],
    },
  ];

  return (
    <div className="main-container-attractions">
      <div className="header-attractions">
        <h2>Hotel surroundings <img src={hotelsurroundings} alt="hotel icon"/></h2>
        <a href="http://google.com" target="_blank" className="link-to-the-map">Show map <img src={showmap} alt="show map icon" /></a>
      </div>
      <div className="main-page-section">
        <div className="grid-container">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              categoryName={category.categoryName}
              attractions={category.attractions}
              picture={category.picture}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttractionsPage;
