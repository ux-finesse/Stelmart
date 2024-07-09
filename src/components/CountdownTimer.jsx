/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = (targetTime) => {
    const now = new Date();
    const difference = targetTime - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // When the countdown reaches 0, restart it for the next 24 hours
      const newTargetTime = new Date();
      newTargetTime.setHours(newTargetTime.getHours() + 24);
      setTargetTime(newTargetTime);
      timeLeft = {
        hours: 24,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const initialTargetTime = new Date();
  initialTargetTime.setHours(initialTargetTime.getHours() + 24);

  const [targetTime, setTargetTime] = useState(initialTargetTime);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timerRef.current);
  }, [targetTime]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>{timeLeft.hours}:</p>
        <p>{timeLeft.minutes}:</p>
        <p>{timeLeft.seconds}</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
