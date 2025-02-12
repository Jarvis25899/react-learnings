import quizCompleteLogo from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ pickedAnswers }) {
  const skippedAnswers = pickedAnswers.filter((answer) => answer === null);
  const skipped = Math.round(
    (skippedAnswers.length / pickedAnswers.length) * 100
  );

  const correctAnswers = pickedAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const correct = Math.round(
    (correctAnswers.length / pickedAnswers.length) * 100
  );

  const incorrect = 100 - skipped - correct;

  return (
    <div id="summary">
      <img src={quizCompleteLogo} alt="Quiz Complete Logo" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correct}%</span>
          <span className="text">answered correct</span>
        </p>
        <p>
          <span className="number">{incorrect}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {pickedAnswers.map((answer, index) => {
          let cssClass = 'user-answer';
          if (answer) {
            cssClass +=
              answer === QUESTIONS[index].answers[0] ? ' correct' : ' wrong';
          } else {
            cssClass += ' skipped';
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
