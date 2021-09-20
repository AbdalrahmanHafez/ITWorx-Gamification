import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeService from "../services/EmployeeService";
import Table from "../components/Table";
import { ExportCSV } from "../components/ExportCSV";

const LeaderBoardDeveloper = (props) => {
  const [data, setdata] = useState({});

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 3,
    },
    {
      field: "points",
      headerName: "Points",
      flex: 1,
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

  if (props.onlyTable)
    return (
      <Table
        name="Developers Leader Board"
        columns={columns}
        onMount={setRows}
      />
    );
  else
    return (
      <>
        <div
          style={{
            width: "50%",
            margin: "auto",
            position: "relative",
          }}
        >
          <Table
            name="Developers Leader Board"
            columns={columns}
            onMount={setRows}
          />
          <div
            className="pb-5 me-3 my-5"
            style={{
              position: "absolute",
              top: "77%",
              left: "11%",
            }}
          >
            <ExportCSV csvData={data} fileName={fileName} />
          </div>
        </div>
      </>
    );
};

export default LeaderBoardDeveloper;
