import React from "react";
import Input from "./utils/Input";

const NewProject = ({ onSetNewProject, projectData, onSaveProj }) => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button
          onClick={onSaveProj}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>
      <div>
        <Input
          label="Title"
          value={projectData.title}
          name="title"
          onSetNewProject={onSetNewProject}
        />
        <Input
          textarea
          label="Description"
          value={projectData.description}
          name="description"
          onSetNewProject={onSetNewProject}
        />
        <Input
          label="Due Date"
          value={projectData.date}
          name="date"
          onSetNewProject={onSetNewProject}
        />
      </div>
    </div>
  );
};

export default NewProject;
