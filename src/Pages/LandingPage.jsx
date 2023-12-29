import { useParams } from "react-router-dom";
import axios from "axios";
// import "./LandingPage.scss";
import { useState, useEffect } from "react";
import "./LandingPage.scss";

return (
  <>
    <>
      {/* Hello world */}
      <header>
        <h1>Knitting Patterns Shop</h1>
        <h2>Welcome to our knitting pattern gallery!</h2>
      </header>
      <div className="gallery">
        {/* Sample Card (Repeat this structure for each card) */}
        <div className="card">
          <img src="knitting_pattern_image.jpg" alt="Knitted Item" />
          <ul>
            <li>Price: $X.XX</li>
            <li>Skill Level: Beginner</li>
            <li>Season: Spring/Fall</li>
            <li>Fibre Type: Merino</li>
          </ul>
        </div>
        {/* Repeat for the remaining 20 cards */}
      </div>
      <div className="sidebar">
        <h3>Sort by Skill Level</h3>
        <label>
          <input type="radio" name="skill-level" defaultValue="beginner" />{" "}
          Beginner
        </label>
        <label>
          <input type="radio" name="skill-level" defaultValue="intermediate" />{" "}
          Intermediate
        </label>
        <label>
          <input type="radio" name="skill-level" defaultValue="advanced" />{" "}
          Advanced
        </label>
        <h3>Sort by Season</h3>
        <label>
          <input type="radio" name="season" defaultValue="spring_fall" />{" "}
          Spring/Fall
        </label>
        <label>
          <input type="radio" name="season" defaultValue="winter" /> Winter
        </label>
        <label>
          <input type="radio" name="season" defaultValue="summer" /> Summer
        </label>
        <h3>Sort by Fibre</h3>
        <label>
          <input type="radio" name="fibre" defaultValue="merino" /> Merino
        </label>
        <label>
          <input type="radio" name="fibre" defaultValue="alpaca" /> Alpaca
        </label>
        <label>
          <input type="radio" name="fibre" defaultValue="wool" /> Wool
        </label>
        <label>
          <input type="radio" name="fibre" defaultValue="blend" /> Blend
        </label>
      </div>
    </>
  </>
);

export default LandingPage;
