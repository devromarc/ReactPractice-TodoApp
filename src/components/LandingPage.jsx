import React from "react";
import logo from "/logo.png";
import Button from "./utils/Button";

const LandingPage = ({ onAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={logo}
        alt="Clipboard Image"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select Project or Get Started with a New one.
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject}>Create a New Project</Button>
      </p>
    </div>
  );
};

export default LandingPage;
