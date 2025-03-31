import React, { useRef, useState } from "react";
import Input from "./utils/Input";
import { nanoid } from "nanoid";

const NewProject = ({ onNewProject }) => {
  const title = useRef();
  const date = useRef();
  const description = useRef();

  function handleSubmitNewProject() {
    const newProject = {
      id: nanoid(),
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    };
    onNewProject(newProject);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button
          onClick={handleSubmitNewProject}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} textarea label="Description" />
        <Input ref={date} label="Due Date" type="date" />
      </div>
    </div>
  );
};

export default NewProject;
