import React from "react";

const Buttons = ({ text, status }) => {
  return (
    <button
      className={`${
        status ? "button-table-edit" : "button-table-delete"
      } button-table`}
    >
      {text}
    </button>
  );
};

export default Buttons;
