const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  console.log(turns, "1th game board");
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    console.log(player);
    gameBoard[row][col] = player;
  }

  function renderGameBoard() {
    return gameBoard.map((row, rowIndex) => {
      return (
        <li key={rowIndex}>
          <ul className="flex gap-10">
            {row.map((playerSymbol, colIndex) => {
              return (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              );
            })}
          </ul>
        </li>
      );
    });
  }

  return <ul className="game-board">{renderGameBoard()}</ul>;
}
