import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Form,
  DropdownButton,
  Dropdown,
  Button,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";

const Badges = () => {
  const [selectedCycleName, setSelectedCycleName] = useState("Current Cycle");
  const handleSelectCycle = (eventKey, event) => {
    console.log("logg_1", eventKey);
    console.log("logg_2", event);
    setSelectedCycleName(event.target.innerText);
  };
  const handleButtonClick = (activity) => {
    console.log(activity);
  };

  return (
    <div className="container my-4">
      <div
        className="card mx-auto"
        style={{ filter: "drop-shadow(0 0 0.2rem #000000)" }}
      >
        <Row className="mt-4 mx-4 align-items-center">
          <h4>Achived Badges</h4>
        </Row>

        <hr />
        <BadgeBox clickHandler={handleButtonClick} />
        <hr />
        <BadgeBox clickHandler={handleButtonClick} />
        <hr />
        <BadgeBox clickHandler={handleButtonClick} />
        <hr />
        <BadgeBox clickHandler={handleButtonClick} />
      </div>
    </div>
  );
};

const BadgeBox = (props) => {
  // Give the Activity, in props
  return (
    <div className="mx-3 my-1">
      <Row className="align-items-center">
        <Col>
          <h5>Badge Name</h5>
        </Col>
        <Col xs="auto">
          <span>Acuired: 10-2-2021</span>
        </Col>
        <Col xs="auto">
          <span>Points needed: 150</span>
        </Col>
      </Row>
    </div>
  );
};

export default Badges;
