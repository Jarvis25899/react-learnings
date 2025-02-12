import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import { useState } from 'react';
import QUESTIONS from '../questions.js';

export default function Question({
  activeQuestionIndex,
  handleSkipAnswer,
  onSelectAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (selectedAnswer) => {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer,
        isCorrect: selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0],
      });

      setTimeout(() => onSelectAnswer(selectedAnswer), 2000);
    }, 1000);
  };

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'selected';
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timer={timer}
        mode={answerState}
        onTimerExpire={answer.selectedAnswer === '' ? handleSkipAnswer : null}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        handleSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
