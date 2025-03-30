import React from "react";
import logo from "/logo.png";

const LandingPage = () => {
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
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        Create a New Project
      </button>
    </div>
  );
};

export default LandingPage;
