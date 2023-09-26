import React, { useState, useEffect } from "react";
const Stopwatch = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, isPaused, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time text-6xl">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
        {/* {milliseconds.toString().padStart(2, "0")} */}
      </p>
      <div className="stopwatch-buttons">
        <button className="brutal-card bg-green" onClick={startAndStop}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="brutal-card bg-myRed" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;