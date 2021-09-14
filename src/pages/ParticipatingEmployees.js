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
      width: 200,
    },
    {
      field: "ActivityName",
      headerName: "Activity Name",
      width: 200,
    },
    {
      field: "ActivityPoints",
      headerName: "Points",
      width: 150,
    },
    {
      field: "TotalPoints",
      headerName: "Total Points",
      width: 200,
    },
    {
      field: "Badges",
      headerName: "Badges",
      width: 150,
    },
    {
      field: "VirtualRecognition",
      headerName: "VR",
      width: 100,
    },
  ];

  const setRows = async () => {
    return EmployeeService.getParticipatingEmployees().then((res) => {
      allActivities = res.data;
      const result = res.data.map((obj, i) => ({
        id: obj.id,
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
