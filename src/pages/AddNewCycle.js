import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import Table from "../components/Table";
import CycleService from "../services/CycleService";
const AddNewCycle = () => {
  // name, adminid, startDate, endDate
  return (
    <>
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
          <h1 className="m-5">Add New Cycle</h1>
          <Form
            method="post"
            action="http://localhost:8080/AddNewCycle"
            className="container px-5 mb-4"
            style={{ fontWeight: "bold", fontSize: "100%" }}
          >
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
      <PlannedCycles />
    </>
  );
};

const PlannedCycles = () => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 300,
    },
    {
      field: "start_date",
      headerName: "Strats on",
      width: 150,
    },
    {
      field: "end_date",
      headerName: "Ends on",
      width: 150,
    },
  ];

  const setRows = async () => {
    return CycleService.getPlanned().then((res) => {
      cycles = res.data;
      const result = res.data.map((obj, i) => ({
        id: obj.id,
        name: obj.name,
        start_date: obj.startDate,
        end_date: obj.endDate,
      }));
      console.log("result", result);
      console.log(cycles);
      return result;
    });
  };
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
      }}
    >
      <Table name="Planned Cycles" columns={columns} onMount={setRows} />
    </div>
  );
};

export default AddNewCycle;
