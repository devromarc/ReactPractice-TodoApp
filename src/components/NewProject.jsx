import React, { useRef } from "react";
import Input from "./utils/Input";
import Modal from "./utils/Modal";
import { nanoid } from "nanoid";

const NewProject = ({ onNewProject, onCancel }) => {
  const modal = useRef();
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

    if (
      newProject.title.trim() === "" ||
      newProject.description.trim() === "" ||
      newProject.date.trim() === ""
    ) {
      modal.current.open();
      // use return so that the function doesnt proceed to the onNewProject function
      return;
    }
    onNewProject(newProject);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">Please Try Again!</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            onClick={onCancel}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
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
    </>
  );
};

export default NewProject;
