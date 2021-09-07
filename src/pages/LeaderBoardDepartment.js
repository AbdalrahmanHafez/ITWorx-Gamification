import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import DepartmentService from "../services/DepartmentService";
import Table from "../components/Table";

const LeaderBoardDepartment = () => {
  const handleSearch = (event) => {
    const value = event.target.value;
    console.log(value);
  };
  const columns = [
    {
      field: "name",
      headerName: "Department Name",
      width: 350,
    },
    {
      field: "points",
      headerName: "Total Points",
      width: 200,
    },
  ];

  const setRows = async () => {
    return DepartmentService.getRanking().then((res) => {
      console.log(res.data);
      const result = res.data.map((obj, i) => ({
        id: i,
        name: obj.departmentName,
        points: obj.points,
      }));
      console.log("result", result);
      return result;
    });
  };
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
      }}
    >
      <Table
        name="Department LeaderBoard"
        columns={columns}
        onMount={setRows}
      />
    </div>
  );
};

export default LeaderBoardDepartment;
