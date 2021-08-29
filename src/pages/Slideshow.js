import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button } from "react-bootstrap";

const Slideshow = () => {
  return (
    <div
      className="Slideshow"
      style={{ display: "block", width: "auto", hight: "auto", padding: 30 }}
    >
      <Carousel variant="dark" pause="hover" nextLabel="" prevLabel="">
        <Carousel.Item>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Carousel.Caption>
            <div
              class="card"
              style={{
                width: "auto",
                filter: "drop-shadow(0 0 1rem #000000)"
              }}
            >
              <div class="card-body">
                <p class="card-text">
                  <h1 style={{ color: "black" }}>New Activities</h1>
                  <table class="table">
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
                  </table>{" "}
                </p>
                <a href="#" class="btn btn-primary">
                  View All Activities
                </a>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Carousel.Caption>
            <div
              class="card"
              style={{
                width: "auto",
                filter: "drop-shadow(0 0 1rem #000000)"
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
                <a href="#" class="btn btn-primary">
                  Go To All Leader Boards
                </a>
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
