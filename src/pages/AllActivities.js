import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const AllActivities = () => {
  let allActivities = [];
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1.25,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 3.5,
    },
    {
      field: "points",
      headerName: "Points",
      flex: 0.9,
    },
    {
      field: "virtualRecognition",
      headerName: "VR",
      flex: 0.8,
    },
    {
      field: "forDevelopers",
      headerName: "Devs-Only",
      flex: 1,
    },
    {
      field: "",
      headerName: "More info",
      sortable: false,
      flex: 1,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Link
            to={{
              pathname: "/ActivityView/" + params.row.id,
              allActivities: allActivities,
            }}
          >
            More info
          </Link>
        );
      },
    },
  ];

  const setRows = async () => {
    return ActivitieService.getInfoAll().then((res) => {
      console.log("response ", res);
      allActivities = res.data;
      const result = res.data.map((obj, i) => ({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        points: obj.totalPoints,
        virtualRecognition: obj.virtualRecognition ? "yes" : "no",
        forDevelopers: obj.isDeveloper ? "yes" : "no",
        moreinfo: <Link href="/">Link</Link>,
      }));
      console.log("result", result);
      console.log(allActivities);
      return result;
    });
  };
  return <Table name="All Activities" columns={columns} onMount={setRows} />;
};

export default AllActivities;
