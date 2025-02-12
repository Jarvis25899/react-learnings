import { useRef } from 'react';

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  handleSelectAnswer,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => 0.5 - Math.random());
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => (
        <li key={answer} className="answer">
          <button
            className={answer === selectedAnswer ? answerState : ''}
            onClick={() => handleSelectAnswer(answer)}
            disabled={answerState !== ''}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
}
