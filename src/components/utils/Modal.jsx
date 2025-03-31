import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, ref, buttonCaption }) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form className="mt-4 text-right" method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
