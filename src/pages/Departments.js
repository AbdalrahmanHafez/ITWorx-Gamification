import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";
import SmallCard from "../components/SmallCard";
import "../styles.css";

const Departments = () => {
  const departments = [
    {
      name: "Department Name 1",
    },
    {
      name: "Department Name 2",
    },
    {
      name: "Department Name 3",
    },
    {
      name: "Department Name 4",
    },
    {
      name: "Department Name 5",
    },
  ];

  return (
    <>
      <h1 className="m-5">My Departments</h1>
      <div className="grid-container grid-container--fit m-5">
        {departments.map((dep) => (
          <SmallCard title={dep.name} />
        ))}
      </div>
    </>
  );
};

export default Departments;
