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
      <div className="container my-4">
        <div
          className="card mx-auto"
          style={{ filter: "drop-shadow(0 0 0.2rem #000000)" }}
        >
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          {/* <TabPanel value="value" index={0}>
            Item One
          </TabPanel>
          <TabPanel value="value" index={1}>
            Item Two
          </TabPanel>
          <TabPanel value="value" index={2}>
            Item Three
          </TabPanel> */}

          <ActivityBox clickHandler={handleButtonClick} />
          <hr />
          <ActivityBox clickHandler={handleButtonClick} />
          <hr />
          <ActivityBox clickHandler={handleButtonClick} />
          <hr />
          <ActivityBox clickHandler={handleButtonClick} />
        </div>
      </div>
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
