import React from "react";
import { deleteTicket } from "../db";
const DeleteBlock = ({ id }) => {
  // const deleteTicket1 = async () => {
  //   await deleteTicket();
  // };
  return (
    <div className="delete-block">
      <div className="icon" onClick={() => deleteTicket(id)}>
        ✖
      </div>
    </div>
  );
};

export default DeleteBlock;
