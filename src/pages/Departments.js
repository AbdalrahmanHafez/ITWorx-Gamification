import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";
import SmallCard from "../components/SmallCard";
import "../styles.css";

const Departments = () => {
  const departments = [
    { key: 1, name: "Department Name 1" },
    { key: 2, name: "Department Name 2" },
    { key: 3, name: "Department Name 3" },
    { key: 4, name: "Department Name 4" },
    { key: 5, name: "Department Name 5" },
  ];

  return (
    <>
      <div className="container my-5">
        <div
          className="card mx-5"
          style={{
            width: "auto",
            filter: "drop-shadow(0 0 0.2rem #000000)",
          }}
        >
          <h1 className="m-4">My Departments</h1>
          <div className="grid-container grid-container--fit m-5">
            {departments.map((dep) => (
              <SmallCard title={dep.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
