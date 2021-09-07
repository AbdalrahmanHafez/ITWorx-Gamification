import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";
import Table from "../components/Table";
import axios from "axios";

const AllActivities = () => {
  const setRows = () => {
    return ActivitieService.getAll().then((res) => {
      const result = res.data.map((obj, i) => ({
        id: i,
        name: obj.name,
        description: obj.description,
        points: obj.totalPoints,
        moreinfo: "moreinfo",
      }));
      //   console.log("result", result);
      return result;
    });
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 225,
    },
    {
      field: "description",
      headerName: "Description",
      width: 500,
    },
    {
      field: "points",
      headerName: "Points",
      width: 120,
    },
    {
      field: "moreinfo",
      headerName: "More Info",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 125,
      // valueGetter: (params) =>
      //   `${params.getValue(params.id, "firstName") || ""} ${
      //     params.getValue(params.id, "lastName") || ""
      //   }`
    },
  ];

  //   return <h2>{data}</h2>;
  return <Table name="All Activities" columns={columns} onMount={setRows} />;
};

export default AllActivities;
