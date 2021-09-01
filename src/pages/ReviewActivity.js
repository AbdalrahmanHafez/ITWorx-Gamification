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

const ReviewActivity = () => {
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
        <Row className="mt-4 mx-4 align-items-center bg-light">
          <DropdownButton
            variant="light"
            id="dropdown-select-badge"
            title={<h6>{selectedCycleName}</h6>}
            onSelect={handleSelectCycle}
          >
            <Dropdown.Item eventKey={1}>Winter Cycle '21</Dropdown.Item>
            <Dropdown.Item eventKey={2}>Spring Cycle '21</Dropdown.Item>
            <Dropdown.Item eventKey={3}>Summer Cycle '21</Dropdown.Item>
          </DropdownButton>
        </Row>
        <hr />
        <ActivityBox clickHandler={handleButtonClick} />
        <hr />
        <ActivityBox clickHandler={handleButtonClick} />
        <hr />
        <ActivityBox clickHandler={handleButtonClick} />
        <hr />
        <ActivityBox clickHandler={handleButtonClick} />
      </div>
    </div>
  );
};

const ActivityBox = (props) => {
  // Give the Activity, in props
  return (
    <div className="mx-3 my-1">
      <Row className="align-items-center">
        <Col>
          <h5>Activity Name</h5>
          <span>this is some the activity Description</span>
        </Col>
        <Col>
          <h5>Employee Name</h5>
          <span>submitted: 10-2-2021</span>
        </Col>
        <Col xs="auto">
          <Button
            eventKey={7}
            variant="outline-success"
            size="lg"
            // onClick={() => props.clickHandler( Activity )}
            onClick={() => props.clickHandler(1)}
          >
            ✔
          </Button>{" "}
          <Button
            variant="outline-danger"
            size="lg"
            onClick={() => props.clickHandler(2)}
          >
            ❌
          </Button>{" "}
          <Button
            variant="outline-dark"
            size="lg"
            onClick={() => props.clickHandler(3)}
          >
            🛈
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ReviewActivity;
