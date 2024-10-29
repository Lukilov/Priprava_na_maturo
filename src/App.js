import React, { useState } from "react";
import uprasanja from "./uprasanja";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Izberi temo in pritisni gumb za naključno vprašanje");
  const [currentCategory, setCurrentCategory] = useState("uprasanja_slo");

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setMessage("Klikni gumb za naključno vprašanje");
  };

  const handleClick = () => {
    const questionsArray = uprasanja[currentCategory];
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    setMessage(questionsArray[randomIndex]);
  };

  return (
    <div className="app-container">
      <h1>Priprave na ustni izpit mature</h1>
      <p>{message}</p>
      
      
      <div className="buttons-container">
        <button onClick={() => handleCategoryChange("uprasanja_slo")}>SLO</button>
        <button onClick={() => handleCategoryChange("uprasanja_ang")}>ANG</button>
        <button onClick={() => handleCategoryChange("uprasanja_mat")}>MAT</button>
      </div>
      
      <br />

  
      <button onClick={handleClick}>
        naključno vprašanje
      </button>
      
    </div>
  );
}

export default App;

