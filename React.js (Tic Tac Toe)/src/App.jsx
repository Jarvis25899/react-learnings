import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import { useState } from 'react';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const initialPlayers = {
  X: 'Player 1',
  O: 'Player 2',
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns?.[0]?.player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function getWinner(gameBoard, players) {
  for (const combinations of WINNING_COMBINATIONS) {
    const first = gameBoard[combinations[0].row][combinations[0].col];
    const second = gameBoard[combinations[1].row][combinations[1].col];
    const third = gameBoard[combinations[2].row][combinations[2].col];

    if (first && first === second && first === third) {
      return players[first];
    }
  }

  return null;
}

function getGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((item) => [...item])];

  for (const turn of gameTurns) {
    const { square, player } = turn;

    gameBoard[square.rowIndex][square.colIndex] = player;
  }

  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(initialPlayers);

  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = getGameBoard(gameTurns);
  const winner = getWinner(gameBoard, players);
  const hasDraw = !winner && gameTurns.length === 9;

  function handleSelectSquare(row, col) {
    setGameTurns((prevTurns) => {
      const currentPlayer = getActivePlayer(prevTurns);
      return [
        { square: { rowIndex: row, colIndex: col }, player: currentPlayer },
        ...prevTurns,
      ];
    });
  }

  function resetGame() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, name) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: name,
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {Object.keys(players).map((symbol, index) => (
            <Player
              key={index}
              name={players[symbol]}
              symbol={symbol}
              isActive={activePlayer === symbol}
              onChangeName={handlePlayerNameChange}
            />
          ))}
          {/* <Player
            name={players['X']}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={players['O']}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          /> */}
        </ol>
        <GameBoard gameBoard={gameBoard} onSquareSelect={handleSelectSquare} />
        {(winner || hasDraw) && (
          <GameOver winner={winner} onClose={resetGame} />
        )}
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
