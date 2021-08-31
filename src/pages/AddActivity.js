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
        className="card mx-5"
        style={{
          width: "auto",
          filter: "drop-shadow(0 0 0.2rem #000000)",
        }}
      >
        <h1 className="m-5">Add New Activity</h1>
        <Form
          className="container px-5 mb-4 "
          style={{ fontWeight: "bold", fontSize: "110%" }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="font-weight-bold">Activity Name</Form.Label>
            <Form.Control type="name" placeholder="Interview Employees" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Row className="g-2">
            <Col md>
              <Form.Group className="mb-3">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Dropdown button"
                >
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
                  label={`Active?`}
                />
              </Form.Group>
            </Col>
          </Row>

          <div style={{ width: "auto" }}>
            <Button
              className="float-right"
              style={{
                display: "flex",
                justifyContent: "right",
                width: "auto",
              }}
              type="submit"
            >
              Submit form
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddActivitiy;
