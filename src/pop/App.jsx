
import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [activeDescription, setActiveDescription] = useState(null);

  const handleTextClick = (description) => {
    if (activeDescription === description) {
      setActiveDescription(null);
    } else {
      setActiveDescription(description);
    }
  };

  return (
    <div className="container">
      <div
        className="text"
        onClick={() => handleTextClick("Description for Location 1")}
      >
        Location 1
      </div>
      {activeDescription === "Description for Location 1" && (
        <div className="description">
          <p>Description for Location 1</p>
          <a href="https://www.google.com/location1">More Info</a>
        </div>
      )}

      <div
        className="text"
        onClick={() => handleTextClick("Description for Location 2")}
      >
        Location 2
      </div>
      {activeDescription === "Description for Location 2" && (
        <div className="description">
          <p>Description for Location 2</p>
          <a href="https://www.google.com/location2">More Info</a>
        </div>
      )}
    </div>
  );
};

export default App;



