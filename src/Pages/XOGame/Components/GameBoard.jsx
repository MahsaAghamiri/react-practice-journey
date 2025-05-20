export default function GameBoard({ onSelectSquare, board }) {
  console.log(board, "1th game board");

  function renderGameBoard() {
    return board.map((row, rowIndex) => {
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
