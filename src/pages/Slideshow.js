import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button } from "react-bootstrap";
import { NavLink, Link, Redirect, useHistory } from "react-router-dom";
import Table from "../components/Table";

const Slideshow = () => {
  let newActivities = [];
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 225,
    },
    {
      field: "description",
      headerName: "Description",
      width: 250,
    },
    {
      field: "points",
      headerName: "Points",
      width: 120,
    },
    {
      field: "",
      headerName: "More info",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Link
            to={{
              pathname: "/ActivityView/" + params.row.id,
              allActivities: newActivities,
            }}
          >
            More info
          </Link>
        );
      },
    },
  ];

  const setRows = async () => {
    return ActivitieService.getNew().then((res) => {
      newActivities = res.data;
      const result = res.data.map((obj, i) => ({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        points: obj.totalPoints,
        moreinfo: <Link href="/">Link</Link>,
      }));
      console.log("result", result);
      console.log(newActivities);
      return result;
    });
  };

  return (
    <div
      className="Slideshow"
      style={{ display: "block", width: "auto", hight: "auto", padding: 30 }}
    >
      <Carousel variant="dark" pause="hover" nextLabel="" prevLabel="">
        <Carousel.Item>
          <div style={{ height: "150vh" }}></div>
          <Carousel.Caption>
            <p class="card-text">
              <Table
                name="New Activities"
                columns={columns}
                onMount={setRows}
              />
              ;
            </p>
            <Link
              to="/AllActivities"
              class="btn btn-primary"
              style={{ backgroundColor: "#3a73b5" }}
            >
              View All Activities
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ height: "60vh" }}></div>

          <Carousel.Caption>
            <div
              class="card"
              style={{
                width: "auto",
                filter: "drop-shadow(0 0 1rem #000000)",
              }}
            >
              <div class="card-body">
                <p class="card-text">
                  <h1 style={{ color: "black" }}>Leader Board</h1>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Practice</th>
                        <th scope="col">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <th>Abdelrahman</th>
                        <td>ITWorx</td>
                        <td>Java</td>
                        <td>1500</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <th>Yousef</th>
                        <td>Create Desktop App</td>
                        <td>Python</td>
                        <td>1200</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <th>Youssef</th>
                        <td>Develop Website</td>
                        <td>C#</td>
                        <td>1200</td>
                      </tr>
                    </tbody>
                  </table>{" "}
                </p>
                <Link
                  to="/EmployeeRanking"
                  class="btn btn-primary"
                  style={{ backgroundColor: "#3a73b5" }}
                >
                  Go To All Leader Boards
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slideshow;
{
  /* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>; */
}
