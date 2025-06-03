import NewProject from "./NewProject";

export default function Sidebar() {
  return (
    <aside className="w-1/3 md:w-md px-8 py-16 bg-[#2c2438] text-violet-50 rounded-tr-4xl ">
      <h2 className="text-center mb-8 mt-8 font-bold uppercase text-[18px] md:text-xl">
        Your Projects
      </h2>
      <div className="text-center mb-12">
        <button className="px-6 py-2 md:text-base text-xl text-violet-950 rotate-md bg-violet-100 hover:bg-violet-200 hover:shadow-sm hover:shadow-violet-100">
          + Add Project
        </button>
      </div>
    </aside>
  );
}
