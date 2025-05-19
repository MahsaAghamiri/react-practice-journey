export default function Log({ turns }) {
  function renderLogs() {
    return turns.map((turn) => (
      <li key={`${turn.square.row}${turn.square.col}`}>
        {turn.player} selected {turn.square.row}, {turn.square.col}
      </li>
    ));
  }
  return <ul>{renderLogs()}</ul>;
}
