import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const progressTimer = setInterval(
      () => setRemainingTime((prevTime) => prevTime - 10),
      10
    );

    return () => {
      clearInterval(progressTimer);
    };
  }, []);

  return <progress value={remainingTime} max={timer}></progress>;
}
