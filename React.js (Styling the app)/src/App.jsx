import AuthInputs from './components/AuthInputs.jsx';
import BlinkingWords from './components/BlinkingWords.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
        <BlinkingWords />
      </main>
    </>
  );
}
