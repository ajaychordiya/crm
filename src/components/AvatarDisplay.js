import React from "react";

const AvatarDisplay = ({ ticket }) => {
  console.log(ticket);
  return (
    <div className="avtar-container">
      <div className="img-container">
        <img
          src={
            ticket.avatar
              ? ticket.avatar
              : "https://raw.githubusercontent.com/kubowania/monday-crm-clone/main/src/images/blank-profile.png"
          }
          alt="blank"
        />
      </div>
    </div>
  );
};

export default AvatarDisplay;
