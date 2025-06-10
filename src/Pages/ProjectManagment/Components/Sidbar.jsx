import Button from "./Button";
import NewProject from "./NewProject";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  function renderProjectsData() {
    return projects.map(({ id, title }) => {
      let cssClass =
        "w-full text-left px-2 py-1 rounded-sm my-1  text-3xl hover:text-violet-200 hover:bg-violet-800";

      if (id === selectedProjectId) {
        cssClass += "bg-violet-800 text-violet-200";
      } else {
        cssClass += "text-violet-400";
      }

      return (
        <li key={id}>
          <button className={cssClass} onClick={() => onSelectProject(id)}>
            {title}
          </button>
        </li>
      );
    });
  }
  return (
    <aside className="w-1/3 md:w-md px-8 py-16 bg-[#2c2438] text-violet-50 rounded-tr-4xl ">
      <h2 className="text-center mb-8 mt-8 font-bold uppercase text-[18px] md:text-xl">
        Your Projects
      </h2>
      <div className="text-center mb-12">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">{renderProjectsData()}</ul>
    </aside>
  );
}
