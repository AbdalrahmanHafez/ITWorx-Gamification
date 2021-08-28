import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";

const AllActivities = () => {
  const handleSearch = (event) => {
    const value = event.target.value;
    console.log(value);
  };
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 225
    },
    {
      field: "description",
      headerName: "Description",
      width: 500
    },
    {
      field: "points",
      headerName: "Points",
      width: 120
    },
    {
      field: "moreinfo",
      headerName: "More Info",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 125
      // valueGetter: (params) =>
      //   `${params.getValue(params.id, "firstName") || ""} ${
      //     params.getValue(params.id, "lastName") || ""
      //   }`
    }
  ];
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getAllActivities = () => {
      ActivitieService.getAll().then((res) => {
        // console.log(res.data);
        const result = res.data.map((obj, i) => ({
          id: i,
          name: obj.name,
          description: obj.description,
          points: obj.totalPoints,
          moreinfo: "moreinfo"
        }));
        console.log("result", result);
        // setRows([]);
        setRows(result);
        // return rows;
      });
    };
    getAllActivities();
  }, []);
  // const rows = [getAllActivities()];
  // { id: 3, name: "interview", description: "Snow", points: 35 , moreinfo: "someText"},

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
                All Activities
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

export default AllActivities;

{
  /* * <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Points</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Interview</th>
                  <td>Interview 5 New Employees</td>
                  <td>50</td>
                  <td>
                    <a href="">more info</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">New Theme</th>
                  <td>Create New Theme for the company website</td>
                  <td>46</td>
                  <td>
                    <a href="">more info</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Fix Bugs</th>
                  <td>these damn bugs</td>
                  <td>20</td>
                  <td>
                    <a href="">more info</a>
                  </td>
                </tr>
              </tbody>
            </table> */
}
