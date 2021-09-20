import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import DepartmentService from "../services/DepartmentService";
import Table from "../components/Table";
import { ExportCSV } from "../components/ExportCSV";

const LeaderBoardDepartment = () => {
  const [data, setdata] = useState({});

  const columns = [
    {
      field: "name",
      headerName: "Department Name",
      flex: 2,
    },
    {
      field: "points",
      headerName: "Total Points",
      flex: 1,
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

      setdata(result);

      return result;
    });
  };

  const fileName = "Test";
  // const viewers = [
  //   {
  //     id: 1,
  //     name: "Activity 1",
  //     pointss: 30
  //   },
  //   {
  //     id: 2,
  //     name: "Activity 2",
  //     pointss: 20
  //   }
  // ]

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
          name="Department LeaderBoard"
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

export default LeaderBoardDepartment;
