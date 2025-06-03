import NewProject from "./Components/NewProject";
import Sidebar from "./Components/Sidbar";

export default function ProjectManagment() {
  return (
    <main
      id="project-managment"
      className="h-screen bg-violet-50 text-violet-950 pt-20 flex gap-4"
    >
      <Sidebar />
      <NewProject />
    </main>
  );
}
