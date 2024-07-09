/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(24, 0, 0, 0); 

    const difference = targetTime - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      
      timeLeft = {
        hours: 24,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <p>{timeLeft.hours}:</p>
        <p>{timeLeft.minutes}:</p>
        <p>{timeLeft.seconds}</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
