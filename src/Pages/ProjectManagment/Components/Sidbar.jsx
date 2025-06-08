import Button from "./Button";
import NewProject from "./NewProject";

export default function Sidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 md:w-md px-8 py-16 bg-[#2c2438] text-violet-50 rounded-tr-4xl ">
      <h2 className="text-center mb-8 mt-8 font-bold uppercase text-[18px] md:text-xl">
        Your Projects
      </h2>
      <div className="text-center mb-12">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
    </aside>
  );
}
