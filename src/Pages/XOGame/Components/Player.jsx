import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <li className={isActive ? "is-active" : undefined}>
      <span>
        {isEditing ? (
          <input type="text" value={name} onChange={handleChange} required />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
