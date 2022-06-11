import React from "react";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container">
        <img
          src="https://raw.githubusercontent.com/kubowania/monday-crm-clone/main/src/images/crm-logo.png"
          alt="logo"
        />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate("/")}>
          ❮❮
        </div>

        <div className="icon" onClick={() => navigate("/ticket")}>
          ➕
        </div>
      </div>
    </nav>
  );
};

export default Nav;
