import { useState } from 'react';
import Header from './Header.jsx';
import Investments from './Investments.jsx';
import { calculateInvestmentResults } from './util/investment.js';
import Results from './Results.jsx';

const groups = [
  {
    initialInvestment: 'Initial Investment',
    annualInvestment: 'Annual Investment',
  },
  {
    expectedReturn: 'Expected Return',
    duration: 'Duration',
  },
];

const initialInvestmentValues = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [investmentValues, setInvestmentValues] = useState(
    initialInvestmentValues
  );

  const isInputValid = investmentValues.duration >= 1;

  function handleInputChange(value, key) {
    setInvestmentValues((prevValues) => ({
      ...prevValues,
      [key]: +value,
    }));
  }

  return (
    <>
      <Header />
      <Investments
        groups={groups}
        investmentValues={investmentValues}
        onInputChange={handleInputChange}
      />
      {isInputValid ? (
        <Results investmentValues={investmentValues} />
      ) : (
        <p className="center">Please enter duration greater than 0.</p>
      )}
    </>
  );
}

export default App;
