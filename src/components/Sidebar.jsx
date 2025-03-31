import React from "react";
import Button from "./utils/Button";

const SideBar = ({ onAddProject, projects, onSelectProject }) => {
  let content;
  if (projects.length <= 0) {
    content = null;
  } else {
    {
      content = projects.map((proj) => (
        <button
          onClick={() => onSelectProject(proj.id)}
          key={proj.id}
          className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
        >
          {proj.title}
        </button>
      ));
    }
  }
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <Button onClick={onAddProject}>+ Add Project</Button>
      <ul className="mt-8">{content}</ul>
    </aside>
  );
};

export default SideBar;
