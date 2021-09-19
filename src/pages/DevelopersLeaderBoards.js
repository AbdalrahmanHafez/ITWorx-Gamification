import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeService from "../services/EmployeeService";
import Table from "../components/Table";
import { ExportCSV } from "../components/ExportCSV";

const DevelopersLeaderBoards = () => {
  const [data, setdata] = useState({});

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 350,
    },
    {
      field: "points",
      headerName: "Points",
      width: 120,
    },
  ];
  const fileName = "Test";
  const setRows = async () => {
    return EmployeeService.getDevelopersRanking().then((res) => {
      const result = res.data.map((obj, i) => ({
        id: i,
        name: obj.name,
        points: obj.points,
      }));
      console.log("result", result);
      setdata(result);
      return result;
    });
  };
  return (
    <>
      <div
        style={{
          width: "50%",
          margin: "auto",
        }}
      >
        <Table
          name="Employee Leader Board"
          columns={columns}
          onMount={setRows}
        />
      </div>
      <div className="pb-5 me-3" style={{ textAlign: "right" }}>
        <ExportCSV csvData={data} fileName={fileName} />
      </div>
    </>
  );
};

export default DevelopersLeaderBoards;
