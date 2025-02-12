import reactQuizLogo from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={reactQuizLogo} alt="React Quiz Logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
