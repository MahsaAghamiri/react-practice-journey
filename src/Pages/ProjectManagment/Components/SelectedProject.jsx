import Task from "./Task";

export default function SelectedProject({
  project,
  onDelete,
  addTask,
  deleteTask,
  tasks,
}) {
  console.log(project, "p");
  // const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // });

  return (
    <div className="w-[45rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-violet-300 ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-violet-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-violet-600 hover:text-violet-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-violet-400">{project.dueTo}</p>
        <p className="text-violet-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Task addTask={addTask} deleteTask={deleteTask} tasks={tasks} />
    </div>
  );
}
