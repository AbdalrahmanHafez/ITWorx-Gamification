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
      width: 450,
    },
    {
      field: "points",
      headerName: "Points",
      width: 120,
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
        }}
      >
        <Table
          name="Pactice Leader Board"
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
export default LeaderBoardPractice;
