import React from "react";
import clsx from "clsx";

const Input = ({ className, onSetNewProject, ...props }) => {
  function handleChange(event) {
    const { value, name } = event.target;
    onSetNewProject((prevState) => ({ ...prevState, [name]: value }));
  }
  const baseInputClasses = clsx(
    "w-full",
    "p-1",
    "border-b-2",
    "rounded-sm",
    "border-stone-300",
    "bg-stone-200",
    "text-stone-600",
    "focus:outline-none",
    "focus:border-stone-600",
    className
  );
  return (
    <input {...props} className={baseInputClasses} onChange={handleChange} />
  );
};

export default Input;
