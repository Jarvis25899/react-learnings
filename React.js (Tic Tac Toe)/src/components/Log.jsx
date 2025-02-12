export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((item, index) => (
        <li key={index}>
          {item.player} selected {item.square.rowIndex}, {item.square.colIndex}
        </li>
      ))}
    </ol>
  );
}
