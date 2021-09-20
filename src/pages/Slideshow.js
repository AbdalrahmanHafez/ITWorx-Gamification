import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button } from "react-bootstrap";
import { NavLink, Link, Redirect, useHistory } from "react-router-dom";
import Table from "../components/Table";
import NewActivities from "./NewActivities";
import LeaderBoardNonDeveloper from "./LeaderBoardNonDeveloper";
import LeaderBoardDeveloper from "./LeaderBoardDeveloper";

import { UserContext } from "../Store";

const Slideshow = () => {
  const [user, setUser] = useContext(UserContext);
  const { isAdmin, isDeveloper } = user;

  console.log("user", user.isDeveloper);
  return (
    <div
      className="Slideshow"
      style={{ display: "block", width: "auto", hight: "auto" }}
    >
      <Carousel variant="dark" pause="hover" nextLabel="" prevLabel="">
        <Carousel.Item>
          <div style={{ height: "110vh" }}></div>
          <Carousel.Caption>
            <p class="card-text">
              <NewActivities />
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
          <div style={{ height: "110vh" }}></div>

          <Carousel.Caption>
            <p class="card-text">
              {isDeveloper ? (
                <LeaderBoardDeveloper onlyTable />
              ) : (
                <LeaderBoardNonDeveloper onlyTable />
              )}
            </p>
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
