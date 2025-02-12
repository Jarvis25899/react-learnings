import reactLogo from '../../assets/react-core-concepts.png';
import './Header.css';

const Descriptions = ['Fundamental', 'Core', 'Crucial'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const desc = Descriptions[getRandomInt(2)];
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
