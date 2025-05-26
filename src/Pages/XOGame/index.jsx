import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import "./index.css";
import Log from "./Components/Log";
import GameOver from "./Components/GameOver";
import deriveActivePlayer from "./Utils/deriveActivePlayer";
import deriveGameBoard from "./Utils/deriveGameBoard";
import driveWinner from "./Utils/deriveWinner";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function XOGame() {
  // gameTurns = [
  //   {square: {
  //     row: rowIndex,
  //     col: colIndex,
  //   },
  //   player: player
  //   }
  // ]
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns, INITIAL_GAME_BOARD);

  const winner = driveWinner(gameBoard, players);
  let hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerName(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <div id="xo-game">
      <main className="game-container">
        <ul className="players">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerName}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerName}
          />
        </ul>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </main>
      <Log turns={gameTurns} />
    </div>
  );
}
