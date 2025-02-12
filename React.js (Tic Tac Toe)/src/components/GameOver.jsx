export default function GameOver({ winner, onClose }) {
  return (
    <section id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>{winner} won !!</p> : <p>It's a Draw !!</p>}
      <button onClick={onClose}>Rematch!</button>
    </section>
  );
}
