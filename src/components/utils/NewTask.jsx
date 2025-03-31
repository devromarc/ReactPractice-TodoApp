import React from "react";
import { useState } from "react";

const NewTask = ({ onAddTask, onDeleteTask }) => {
  const [task, setTask] = useState("");

  function handleTaskChange(event) {
    setTask(event.target.value);
  }

  function onAddTaskFn(task) {
    onAddTask(task);
    setTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleTaskChange}
        value={task}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={() => onAddTaskFn(task)}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
