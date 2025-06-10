import NewTask from "./NewTask";

export default function Task({ tasks = [], addTask, deleteTask }) {
  function renderTasks() {
    return tasks.map(({ text, id }) => {
      return (
        <li key={id} className="flex justify-between my-4">
          <span>{text}</span>
          <button
            onClick={() => deleteTask(id)}
            className="text-violet-700-700 hover:text-amber-300"
          >
            clear
          </button>
        </li>
      );
    });
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-violet-700 mb-4">Tasks</h2>
      <NewTask addTask={addTask} />
      {tasks.length === 0 && (
        <p className="text-violet-800 mt-4 mb-4">no task</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 bg-violet-100 rounded-b-md">{renderTasks()}</ul>
      )}
    </section>
  );
}
