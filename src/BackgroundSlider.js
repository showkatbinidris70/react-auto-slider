import React, { useEffect, useState } from "react";
import "./BackgroundSlider.css";
import imageSlide from "./data";

export default function BackgroundSlider() {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <div className="counter-style">
      <div style={bgImageStyle}></div>
      <div className="transfarent-background"></div>
      <div className="description">
        <div>
          <h1>{imageSlide[currentState].title}</h1>
          <p>Some text 1</p>
        </div>
        <div className="carousel-built">
          {imageSlide.map((imageSlide, currentState) => (
            <span
              key={currentState}
              onClick={() => goToNext(currentState)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
