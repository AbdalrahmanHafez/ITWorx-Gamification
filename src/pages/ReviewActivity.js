import { React, useState, useEffect } from "react";
import TabPanel from "@material-ui/lab/TabPanel";
import { DataGrid, AppBar, Tabs, Tab } from "@material-ui/core/";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Form,
  DropdownButton,
  Dropdown,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const ReviewActivity = () => {
  useEffect(() => {
    // TODO: Fetch all needed to review Activities
  }, []);
  const handleButtonClick = (activity) => {
    console.log(activity);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs aria-label="simple tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <TabPanel index={0}>
        Item One
      </TabPanel>
      <TabPanel index={1}>
        Item Two
      </TabPanel>
      <TabPanel index={2}>
        Item Three
      </TabPanel>
    </>
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
