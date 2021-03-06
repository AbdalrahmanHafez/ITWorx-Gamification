import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePic.css";

import profile_pic from "../Images/profile_pic.png";

const ProfilePic = (props) => {
  return (
    <>
      <div className="Profile-Contailer" onClick={props.onClick}>
        <a href="/#Profile">
          <img className="ProfilePic ml-5" src={profile_pic} alt="" />
        </a>
        <div className="PointsDisplay">{props.points}</div>
      </div>
    </>
  );
};

export default ProfilePic;
