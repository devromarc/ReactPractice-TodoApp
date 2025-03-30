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
        <p>
          <label className="text-sm font-bold uppercase text-stone-500">
            Title
          </label>
          <Input
            className="mb-2"
            onSetNewProject={onSetNewProject}
            value={projectData.title}
            name="title"
          />
        </p>
      </div>
      <div>
        <p>
          <label className="text-sm font-bold uppercase text-stone-500">
            Description
          </label>
          <Input
            className="mb-2"
            onSetNewProject={onSetNewProject}
            value={projectData.description}
            name="description"
          />
        </p>
      </div>
      <div>
        <p>
          <label className="text-sm font-bold uppercase text-stone-500">
            Date
          </label>
          <Input
            type="date"
            onSetNewProject={onSetNewProject}
            value={projectData.date}
            name="date"
          />
        </p>
      </div>
    </div>
  );
};

export default NewProject;
