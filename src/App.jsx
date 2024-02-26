import React from "react";
import "./index.css";
import Table from "./components/Table";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="container-body">
      <h1 className="tittle-main">TABLE</h1>
      <Form textForm="Nombre" />
      <Form textForm="Descripcion" />

      <Table />
    </div>
  );
};

export default App;
