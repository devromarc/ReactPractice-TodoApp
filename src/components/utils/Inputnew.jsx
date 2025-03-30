import React from "react";

const Inputnew = ({ isTextArea }) => {
  return (
    <p>
      <label htmlFor=""></label>
      {isTextArea ? <textarea /> : <input />}
    </p>
  );
};

export default Inputnew;
