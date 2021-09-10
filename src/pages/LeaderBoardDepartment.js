import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import DepartmentService from "../services/DepartmentService";
import Table from "../components/Table";
import { ExportCSV } from './ExportCSV';


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

  const fileName = "Test";
  const viewers = [
    {
      id: 1,
      name: "Activity 1",
      pointss: 30
    },
    {
      id: 2,
      name: "Activity 2",
      pointss: 20
    }
  ]


  return (
    <>
      <ExportCSV csvData={viewers} fileName={fileName} />
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
    </>
  );
};

export default LeaderBoardDepartment;
