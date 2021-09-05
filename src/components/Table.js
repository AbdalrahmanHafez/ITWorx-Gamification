import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
const Table = (props) => {
  const columns = props.columns;
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    try {
      await props.onMount().then((data) => setRows(data));
    } catch (error) {
      console.log("Error !! ", error.message);
    }
  }, []);

  return (
    <>
      <div className="container my-5">
        <div
          className="card mx-5"
          style={{
            width: "auto",
            filter: "drop-shadow(0 0 0.2rem #000000)",
          }}
        >
          <div className="card-body my-3">
            <p className="card-text">
              <h1 className="mb-3" style={{ color: "black" }}>
                {props.name}
              </h1>

              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  disableSelectionOnClick
                />
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
