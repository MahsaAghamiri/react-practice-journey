import noProjectImage from "../../../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-40 h-40 object-contain mx-auto"
      />
      <h2 className="text-3xl font-bold text-violet-500 my-4">
        No Projected Selected
      </h2>
      <p className="text-violet-400 mb-4 text-2xl">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
