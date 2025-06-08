import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueTo = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = title.current.value;
    const enteredDueTo = title.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueTo: enteredDueTo,
    });
  }

  return (
    <div className="w-[60rem] text-2xl p-20 text-violet-800">
      <menu className="flex items-center justify-end gap-4 mb-4 mt-20">
        <li>
          <button className="hover:text-violet-950 cursor-pointer">
            Cnacel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-violet-800 text-violet-50 hover:bg-violet-950 cursor-pointer px-8 py-4 rounded-2xl"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} lable="Title" />
        <Input ref={description} lable="Description" textarea />
        <Input type="date" ref={dueTo} lable="Due To" />
      </div>
    </div>
  );
}
