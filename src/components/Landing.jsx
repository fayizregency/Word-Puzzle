import React from "react";
import mainFrame from "../assets/img/frame2.svg";
import startButton from "../assets/img/start-button.svg";
export const Landing = ({startGame}) => {
  return (
    <div
      className="landing-container"
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${mainFrame})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        className="start-button"
        style={{
          background: `url(${startButton})`,
        }}
        onClick={startGame}
      >
        Enter The Golder Gate
      </button>
    </div>
  );
};
