import React, { useRef } from "react";
import Modal from "./utils/Modal";

const SelectedProject = ({ project, onDeleteProject }) => {
  const { title, date, description, id } = project;
  const modal = useRef();
  return (
    <>
      <Modal ref={modal} buttonCaption="Close" deleteModal>
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Are you Sure you want to delete '{title}'?
        </h2>
        <div className="flex justify-end gap-2">
          <button
            className="flex-1 px-4 py-2 text-xs md:text-base rounded-md bg-red-700 text-white hover:bg-red-600"
            onClick={() => onDeleteProject(id)}
          >
            Yes!
          </button>
          <button
            className="flex-1 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            onClick={() => modal.current.close()}
          >
            No
          </button>
        </div>
      </Modal>
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
            <button
              onClick={() => modal.current.open()}
              className="text-stone-600 hover:text-stone-950"
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">{description} </p>
          <p className="text-stone-600 whitespace-pre-wrap">{date}</p>
        </header>
        <div></div>
      </div>
    </>
  );
};

export default SelectedProject;
