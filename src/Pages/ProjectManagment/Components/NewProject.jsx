import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[60rem] text-2xl p-20 text-violet-800">
      <menu className="flex items-center justify-end gap-4 mb-4 mt-20">
        <li>
          <button className="hover:text-violet-950 cursor-pointer">
            Cnacel
          </button>
        </li>
        <li>
          <button className="bg-violet-800 text-violet-50 hover:bg-violet-950 cursor-pointer px-8 py-4 rounded-2xl">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input lable="Title" />
        <Input lable="Description" textarea />
        <Input lable="Due To" />
      </div>
    </div>
  );
}
