import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";
import Table from "../components/Table";
import fakeAuth from "fake-auth";
import { ResponsiveEmbed } from "react-bootstrap";

const AllActivities = () => {
  const handleSearch = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  const getBadges = async () => {
    ActivitieService.getAll().then((res) => {
      // console.log(res.data);
      const result = res.data.map((obj, i) => ({
        id: i,
        name: obj.name,
        description: obj.description,
        points: obj.totalPoints,
        moreinfo: "moreinfo",
      }));
      console.log("result", result);
      // setRows([]);
      return result;
    });
    // };
    // return getAllActivities;
  };

  useEffect(() => {
    fakeAuth
      .signin("demo@gmail.com", "demo")
      .then((response) => console.log(response));
    // fakeAuth.signout();
  }, []);

  return (
    <div className="container my-5">
      <div
        className="card mx-5"
        style={{
          width: "auto",
          filter: "drop-shadow(0 0 0.2rem #000000)",
        }}
      >
        <h1 className="m-5">Badges</h1>
      </div>
    </div>
  );
};

export default AllActivities;
