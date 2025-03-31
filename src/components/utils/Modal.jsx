import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, ref, buttonCaption, deleteModal }) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-fit"
    >
      {children}
      {!deleteModal && (
        <form className="mt-4 flex justify-end gap-2" method="dialog">
          <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
            {buttonCaption}
          </button>
        </form>
      )}
    </dialog>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
