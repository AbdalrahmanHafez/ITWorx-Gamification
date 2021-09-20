import { React, useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeService from "../services/EmployeeService";
import Table from "../components/Table";

const ParticipatingEmployees = () => {
  let allActivities = [];
  const columns = [
    {
      field: "EmployeeName",
      headerName: "Employee Name",
      flex: 3,
    },
    {
      field: "ActivityName",
      headerName: "Activity Name",
      flex: 3,
    },
    {
      field: "ActivityPoints",
      headerName: "Points",
      flex: 2,
    },
    {
      field: "TotalPoints",
      headerName: "Total Points",
      flex: 3,
    },
    {
      field: "Badges",
      headerName: "Badges",
      flex: 2,
    },
    {
      field: "VirtualRecognition",
      headerName: "VR",
      flex: 1.25,
    },
  ];

  const setRows = async () => {
    return EmployeeService.getParticipatingEmployees().then((res) => {
      allActivities = res.data;
      const result = res.data.map((obj, i) => ({
        id: i,
        EmployeeName: obj.EmployeeName,
        ActivityName: obj.ActivityName,
        ActivityPoints: obj.points,
        TotalPoints: obj.TotalPoints,
        Badges: obj.Badges,
        VirtualRecognition: obj.VirtualRecognition,
      }));
      console.log("result", result);
      console.log(allActivities);
      return result;
    });
  };

  return (
    <>
      <Table
        name="Participating Employees"
        columns={columns}
        onMount={setRows}
      />
    </>
  );
};

export default ParticipatingEmployees;
