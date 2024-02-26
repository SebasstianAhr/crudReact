import React from "react";
import Buttons from "./Buttons";

const Tablebody = () => {
  return (
    <tr>
      <td>Sebasstian</td>
      <td>Ahr</td>
      <td className="actions-table">
        <Buttons status={true} text="Edite" /> <Buttons status={false} text="Delete" />
      </td>
    </tr>
  );
};

export default Tablebody;
