import { useEffect, useState } from 'react';

export default function QuestionTimer({ timer, onTimerExpire, mode }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timout = setTimeout(onTimerExpire, timer);

    return () => clearTimeout(timout);
  }, [timer, onTimerExpire]);

  useEffect(() => {
    const interval = setInterval(
      () => setRemainingTime((prevTime) => prevTime - 100),
      100
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      className={mode}
      value={remainingTime}
      max={timer}
    />
  );
}
