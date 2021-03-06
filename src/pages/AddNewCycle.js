import { React, useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import Table from "../components/Table";
import CycleService from "../services/CycleService";
import AlertMsg from "../components/AlertMsg";

const AddNewCycle = () => {
  // name, adminid, startDate, endDate
  const [alertOpen, setalertOpen] = useState(false);
  const [alertMsg, setalertMsg] = useState("");
  const popUpAlert = (message) => {
    setalertMsg(message);
    setalertOpen(true);
    setTimeout(() => {
      setalertOpen(false);
    }, 1000);
  };

  const addCycleForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    const name = addCycleForm.current.name.value;
    const startDate = addCycleForm.current.startDate.value;
    const endDate = addCycleForm.current.endDate.value;

    CycleService.addNew({ name, startDate, endDate })
      .then((res) => {
        console.log("success ==> ", res.data);
        // alert("done");
        popUpAlert("Done");
      })
      .catch((err) => console.log(err));
  };

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
            className="container px-5 mb-4"
            style={{ fontWeight: "bold", fontSize: "100%" }}
            onSubmit={handleSubmit}
            ref={addCycleForm}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-weight-bold">Name</Form.Label>
              <Form.Control
                id="name"
                type="name"
                placeholder=""
                name="name"
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Label className="font-weight-bold">Starts on</Form.Label>
              </Col>
              <Col xs={7}>
                <Form.Control
                  id="startDate"
                  className="mb-2"
                  type="date"
                  name="start_date"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="font-weight-bold">Ends on</Form.Label>
              </Col>
              <Col xs={7}>
                <Form.Control
                  id="endDate"
                  type="date"
                  name="end_date"
                  required
                />
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
      <AlertMsg open={alertOpen} setOpen={setalertOpen} msg={alertMsg} />
    </>
  );
};

const PlannedCycles = () => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 2,
    },
    {
      field: "start_date",
      headerName: "Strats on",
      flex: 1,
    },
    {
      field: "end_date",
      headerName: "Ends on",
      flex: 1,
    },
  ];

  const setRows = async () => {
    return CycleService.getPlanned().then((res) => {
      console.log("res.data", res.data);
      const result = res.data.map((obj, i) => ({
        id: obj.id,
        name: obj.name,
        start_date: obj.startDate,
        end_date: obj.endDate,
      }));
      console.log("result", result);
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
