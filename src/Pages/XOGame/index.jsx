import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import "./index.css";
import Log from "./Components/Log";
import { WINNING_COMBINATION } from "./winnig-combination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    console.log(player);
    gameBoard[row][col] = player;
  }

  let winner = null;
  for (const combination of WINNING_COMBINATION) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
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
        {winner && <p>You Won {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </main>
      <Log turns={gameTurns} />
    </div>
  );
}
