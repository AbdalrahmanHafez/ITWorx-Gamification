import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  DropdownButton,
  Dropdown,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const AddActivitiy = () => {
  // Name, Description, Type, Total Points, Virtual Recognition Provided, Active, Start Date, End Date

  return (
    <div className="container my-5">
      <div
        className="card w-50 mx-auto"
        style={{
          borderStyle: "solid",
          // width: "40vw",
          justifyContent: "center",
          filter: "drop-shadow(0 0 0.2rem #000000)",
        }}
      >
        <h1 className="m-5">Add New Activity</h1>
        <Form
          className="container px-5 mb-4 "
          style={{ fontWeight: "bold", fontSize: "110%" }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="font-weight-bold">Name</Form.Label>
            <Form.Control type="name" placeholder="Interview Employees" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Row className="g-3">
            <Col xs={10}>
              <Form.Group
                className="mb-3 w-25"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="font-weight-bold">
                  Total points
                </Form.Label>
                <Form.Control type="name" placeholder="ex : 300" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <DropdownButton id="dropdown-basic-button" title="Type">
                  <Dropdown.Item href="#/action-1">Developer</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">NonDevelopers</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  id={`default-checkbox`}
                  label={`Disabled`}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className="font-weight-bold">Starts on</Form.Label>
            </Col>
            <Col xs={7}>
              <Form.Control type="date" name="date_of_" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className="font-weight-bold">Ends on</Form.Label>
            </Col>
            <Col xs={7}>
              <Form.Control type="date" name="date_of_" />
            </Col>
          </Row>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button className="mt-3" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddActivitiy;
