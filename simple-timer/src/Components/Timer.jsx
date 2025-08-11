import { useState, useRef, useEffect } from "react";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";

const Timer = () => {
  const timeRef = useRef(null);
  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem("time")) || 0;
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("time", time);
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    } else {
      timeRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
        console.log("Interval running", timeRef.current);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
    setTime(0);
    timeRef.current = null;
    localStorage.removeItem("time");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        onToggle={toggleTimer}
        onReset={resetTimer}
      />
    </div>
  );
};

export default Timer;
