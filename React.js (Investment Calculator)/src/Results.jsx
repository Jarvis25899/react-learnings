import { calculateInvestmentResults, formatter } from './util/investment.js';

export default function Results({ investmentValues }) {
  const result = calculateInvestmentResults(investmentValues);
  const initialInvestment = result?.[0]
    ? result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment
    : 0;

  return (
    <table id="result" align="center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((row, rowIndex) => {
          const totalInterest =
            row.valueEndOfYear -
            row.year * row.annualInvestment -
            initialInvestment;
          const investedCapital = row.valueEndOfYear - totalInterest;

          return (
            <tr key={rowIndex}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
