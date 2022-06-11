import React from "react";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="priority-display">
      <div className="star-container">
        <h3 style={{ color: priority >= 1 ? "#FFC000" : "" }}>★</h3>
        <h3 style={{ color: priority >= 2 ? "#FFC000" : "" }}>★</h3>
        <h3 style={{ color: priority >= 3 ? "#FFC000" : "" }}>★</h3>
        <h3 style={{ color: priority >= 4 ? "#FFC000" : "" }}>★</h3>
        <h3 style={{ color: priority >= 5 ? "#FFC000" : "" }}>★</h3>
      </div>
    </div>
  );
};

export default PriorityDisplay;
