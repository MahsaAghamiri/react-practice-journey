import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import "./index.css";
import Log from "./Components/Log";
import { WINNING_COMBINATION } from "./winnig-combination";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

export default function XOGame() {
  // gameTurns = [
  //   {square: {
  //     row: rowIndex,
  //     col: colIndex,
  //   },
  //   player: player
  //   }
  // ]
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

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
    console.log(gameTurns, "turns");
  }
  return (
    <div id="xo-game">
      <main className="game-container">
        <ul className="players">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ul>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </main>
      <Log turns={gameTurns} />
    </div>
  );
}
