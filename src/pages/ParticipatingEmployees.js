import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const ParticipatingEmployees = () => {
  let allActivities = [];
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 400,
    },
    {
      field: "points",
      headerName: "Gained Points",
      width: 200,
    },
    // {
    //   field: "",
    //   headerName: "More info",
    //   sortable: false,
    //   width: 100,
    //   disableClickEventBubbling: true,
    //   renderCell: (params) => {
    //     return (
    //       <Link
    //         to={{
    //           pathname: "/ActivityView/" + params.row.id,
    //           allActivities: allActivities,
    //         }}
    //       >
    //         More info
    //       </Link>
    //     );
    //   },
    // },
  ];

  const setRows = async () => {
    return ActivitieService.getAll().then((res) => {
      allActivities = res.data;
      const result = res.data.map((obj, i) => ({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        points: obj.totalPoints,
        moreinfo: <Link href="/">Link</Link>,
      }));
      console.log("result", result);
      console.log(allActivities);
      return result;
    });
  };
  return (
    <Table name="Participating Employees" columns={columns} onMount={setRows} />
  );
};

export default ParticipatingEmployees;
