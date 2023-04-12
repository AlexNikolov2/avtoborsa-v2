import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="LandingPage">
      <h1 className="landing-up">Yet to find the car you want?</h1>
      <h1 className="landing-center">A V T O B O R S A</h1>
      <p className="landing-bottom">
        Avtoborsa is the place to find the car of your dreams. Find, buy and
        drive!
      </p>
      <ul>
        <li>
          <i className="fa-solid fa-car-side"></i>Lots of cars
        </li>
        <li>
          <i className="fa-solid fa-clock"></i>Time Effecient
        </li>
        <li>
          <i className="fa-solid fa-universal-access"></i>Easily accessible
        </li>
      </ul>
      <a href="/search">
        Find your car now <i className="fa-solid fa-magnifying-glass"></i>
      </a>
    </section>
  );
};

LandingPage.defaultProps = {};

export default LandingPage;
