import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from "react-bootstrap";

const EditCurrentCycle = () => {
  return (
    <div className="container my-4">
      <div
        className="card w-50 mx-auto"
        style={{
          borderStyle: "solid",
          // width: "40vw",
          justifyContent: "center",
          filter: "drop-shadow(0 0 0.2rem #000000)",
        }}
      >
        <Form
          method="post"
          action="http://localhost:8080/EditCycle"
          className="container px-5 mb-4"
          style={{ fontWeight: "bold", fontSize: "110%" }}
        >
          <Row className="align-items-center">
            <h1 className="m-5">Edit Current Cycle</h1>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="font-weight-bold">Name</Form.Label>
            <Form.Control type="name" placeholder="" name="name" />
          </Form.Group>
          <Row>
            <Col>
              <Form.Label className="font-weight-bold">Starts on</Form.Label>
            </Col>
            <Col xs={7}>
              <Form.Control className="mb-2" type="date" name="start_date" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className="font-weight-bold">Ends on</Form.Label>
            </Col>
            <Col xs={7}>
              <Form.Control type="date" name="end_date" />
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
export default EditCurrentCycle;
