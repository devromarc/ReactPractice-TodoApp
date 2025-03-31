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
      <ul className="p-4 mt-8 rounded-md bg-stone-100 ">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between my-7 border-b-2 border-stone-300 "
          >
            <p>{task}</p>
            <button
              onClick={() => onDeleteTask(index)}
              className="text-stone-700 hover:text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {content}
    </section>
  );
};

export default Tasks;
