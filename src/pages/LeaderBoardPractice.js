import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import PracticeService from "../services/PracticeService";
import Table from "../components/Table";
import { ExportCSV } from "../components/ExportCSV";

const LeaderBoardPractice = () => {
  const [data, setdata] = useState({});

  const columns = [
    {
      field: "PracName",
      headerName: "Practice Name",
      flex: 2,
    },
    {
      field: "points",
      headerName: "Points",
      flex: 1,
    },
  ];
  const fileName = "Test";
  const setRows = async () => {
    return PracticeService.getRanking().then((res) => {
      const result = res.data.map((obj, i) => ({
        id: i,
        PracName: obj.PracName,
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
          position: "relative",
        }}
      >
        <Table
          name="Pactice Leader Board"
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
export default LeaderBoardPractice;
