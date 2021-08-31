import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";
import Table from "../components/Table";

const AllActivities = () => {
  const handleSearch = (event) => {
    const value = event.target.value;
    console.log(value);
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

  const setRows = async () => {
    return ActivitieService.getAll().then((res) => {
      const result = res.data.map((obj, i) => ({
        id: i,
        name: obj.name,
        description: obj.description,
        points: obj.totalPoints,
        moreinfo: "moreinfo",
      }));
      console.log("result", result);
      return result;
    });
  };
  return <Table name="All Activities" columns={columns} onMount={setRows} />;
};

export default AllActivities;
