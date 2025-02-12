import { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
  const [pickedAnswers, setPickedAnswers] = useState([]);

  const activeQuestionIndex = pickedAnswers.length;
  const isQuizOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setPickedAnswers((prevValue) => [...prevValue, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return (
    <>
      {isQuizOver ? (
        <Summary pickedAnswers={pickedAnswers} />
      ) : (
        <div id="quiz">
          <Question
            key={activeQuestionIndex}
            activeQuestionIndex={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            handleSkipAnswer={handleSkipAnswer}
          />
        </div>
      )}
    </>
  );
}
