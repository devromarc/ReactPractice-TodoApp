import { useState } from "react";
import NewTask from "./components/utils/NewTask";

const Tasks = ({ onAddTask, onDeleteTask, tasks }) => {
  let content;
  if (tasks.length <= 0) {
    content = (
      <p className="text-stone-800 my-4">
        The Project doesnt have any task yet!
      </p>
    );
  } else {
    content = (
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center justify-between">
            <li>{task}</li>
            <button className="text-stone-700 hover:text-red-500">
              Delete
            </button>
          </div>
        ))}
      </ul>
    );
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {content}
    </section>
  );
};

export default Tasks;
