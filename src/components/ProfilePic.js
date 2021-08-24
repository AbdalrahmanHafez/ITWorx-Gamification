import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePic.css";

const profile_pic = require("../../Images/profile_pic.png");

const ProfilePic = () => {
  return (
    <>
      <div class="Profile-Contailer">
        <a href="/#Profile">
          <img class="ProfilePic ml-5" src={profile_pic} alt="" />
        </a>
        <div class="PointsDisplay">351 pts</div>
      </div>
    </>
  );
};

export default ProfilePic;
