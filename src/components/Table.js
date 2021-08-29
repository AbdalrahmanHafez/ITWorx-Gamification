import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";

const Table = (props) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    console.log(value);
  };
  const columns = props.columns;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getData() {
      console.log("data??");
      const res = await props.onMount();

      console.log(res);
      /* setRows(res); */
    }
  }, []);

  return (
    <>
      <div class="container my-5">
        <div
          class="card mx-5"
          style={{
            width: "auto",
            filter: "drop-shadow(0 0 0.2rem #000000)"
          }}
        >
          <div class="card-body my-3">
            <p class="card-text">
              <h1 class="mb-3" style={{ color: "black" }}>
                {props.name}
                <div class="input-group w-25 mt-2" style={{ float: "right" }}>
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={handleSearch}
                  />
                  <button type="button" class="btn btn-outline-primary ">
                    search
                  </button>
                </div>
              </h1>

              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={3}
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
