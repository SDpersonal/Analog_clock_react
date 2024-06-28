import React, { useEffect, useState } from "react";
import "../Style/clock.css";

const Clock = () => {
  const [hourRotation, sethourRotation] = useState(0);
  const [minuteRotation, setminuteRotation] = useState(0);
  const [secondRotation, setSecondRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const hrs = new Date().getHours();
      const mint = new Date().getMinutes();
      const sec = new Date().getSeconds();

      let hRotation = 30 * hrs + mint / 2;
      let mRotation = 6 * mint;
      const sRotation = 6 * sec;

      sethourRotation(hRotation)
      setminuteRotation(mRotation)
      setSecondRotation(sRotation);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="controls">
        <a href="https://github.com/SDpersonal/Analog_clock_react" target="blank">
          <img src="assets/img/Github.png" alt="icon" height="40px" />
          &nbsp;CoderXSubham
        </a>
        {/* <a href="" target="_blank"><img src="./assets//instagram.png" alt="icon" height="40px"/>&nbsp;/CoderXSubham</a>  */}
      </div>
      <div className="container">
        <div className="clock">
          <div 
          className="hand" 
          style={{ transform: `rotate(${hourRotation}deg)` }}>
            <i className="hrs-hand"></i>
          </div>
          <div 
           className="hand"
           style={{ transform: `rotate(${minuteRotation}deg)` }}
           >
            <i className="mint-hand"></i>
          </div>
          <div
            className="hand"
            style={{ transform: `rotate(${secondRotation}deg)` }}
          >
            <i className="sec-hand"></i>
          </div>
          <div className="hand">
            <i className="pointer"></i>
          </div>

          <span style={{ "--i": 1 }}>
            <div className="number">1</div>
          </span>
          <span style={{ "--i": 2 }}>
            <div className="number">2</div>
          </span>
          <span style={{ "--i": 3 }}>
            <div className="number">3</div>
          </span>
          <span style={{ "--i": 4 }}>
            <div className="number">4</div>
          </span>
          <span style={{ "--i": 5 }}>
            <div className="number">5</div>
          </span>
          <span style={{ "--i": 6 }}>
            <div className="number">6</div>
          </span>
          <span style={{ "--i": 7 }}>
            <div className="number">7</div>
          </span>
          <span style={{ "--i": 8 }}>
            <div className="number">8</div>
          </span>
          <span style={{ "--i": 9 }}>
            <div className="number">9</div>
          </span>
          <span style={{ "--i": 10 }}>
            <div className="number">10</div>
          </span>
          <span style={{ "--i": 11 }}>
            <div className="number">11</div>
          </span>
          <span style={{ "--i": 12 }}>
            <div className="number">12</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
