import React from "react";

const Input = ({ label, textarea, onSetNewProject, ...props }) => {
  const style =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  function handleChange(event) {
    const { value, name } = event.target;
    onSetNewProject((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={style} {...props} onChange={handleChange} />
      ) : (
        <input className={style} {...props} onChange={handleChange} />
      )}
    </p>
  );
};

export default Input;
