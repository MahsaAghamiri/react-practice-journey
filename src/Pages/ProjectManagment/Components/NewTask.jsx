import { useState } from "react";

export default function NewTask({ addTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") return;
    addTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-b-sm"
        value={enteredTask}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
}
