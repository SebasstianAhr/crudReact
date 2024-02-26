import React from "react";

const Form = ({ textForm }) => {
  return (
    <div className="container-form">
      <form action="">
        <label htmlFor="">{textForm}</label>
        <input type="text" placeholder="Nombre" />
      </form>
    </div>
  );
};

export default Form;
