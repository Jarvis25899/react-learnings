import { useState, useEffect } from 'react';

const text = 'this is the random color paragraph, blinking problem solution';
const initialWords = text.split(' ').map((word) => ({
  value: word,
  color: '#000',
}));

export default function BlinkingWords() {
  const [words, setWords] = useState(initialWords);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWords(
        text.split(' ').map((word) => ({
          value: word,
          color: getRandomColor(),
        }))
      );
    }, 1000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  return (
    <div className="w-full max-w-sm mx-auto mt-8">
      {words.map((item, index) => (
        <span
          key={index}
          style={{
            color: item.color,
          }}
        >
          {item.value + ' '}
        </span>
      ))}
    </div>
  );
}
