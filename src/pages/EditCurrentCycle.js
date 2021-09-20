import { React, useState, useEffect, createRef, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import CycleService from "../services/CycleService";
import AlertMsg from "../components/AlertMsg";

const EditCurrentCycle = () => {
  const editCycleForm = useRef(null);
  const [cycle, setcycle] = useState({});

  const [alertOpen, setalertOpen] = useState(false);
  const [alertMsg, setalertMsg] = useState("");
  const popUpAlert = (message) => {
    setalertMsg(message);
    setalertOpen(true);
    setTimeout(() => {
      setalertOpen(false);
    }, 1000);
  };

  useEffect(() => {
    if (!editCycleForm) return;

    CycleService.getCurrent()
      .then((res) => {
        console.log("success ==> ", res.data);
        // Assume the first if multiple is returned
        const cycleinfo = res.data[0];
        console.log("cuycle info", cycleinfo);
        setcycle(cycleinfo);
        const { name, startDate, endDate } = cycleinfo;
        console.log({ name, startDate, endDate });
        console.log(editCycleForm);
        editCycleForm.current.name.value = name;
        editCycleForm.current.startDate.value = startDate;
        editCycleForm.current.endDate.value = endDate;
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = cycle.id;
    const name = editCycleForm.current.name.value;
    const startDate = editCycleForm.current.startDate.value;
    const endDate = editCycleForm.current.endDate.value;

    CycleService.editCurrent({ id, name, startDate, endDate })
      .then((res) => {
        console.log("success ==> ", res.data);
        // alert("done");
        popUpAlert("Done");
      })
      .catch((err) => {
        console.log(err);
        popUpAlert("Something Went Wrong");
      });
  };
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
          className="container px-5 mb-4"
          style={{ fontWeight: "bold", fontSize: "110%" }}
          onSubmit={handleSubmit}
          ref={editCycleForm}
        >
          <Row className="align-items-center">
            <h1 className="m-5">Edit Current Cycle</h1>
          </Row>

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
              <Form.Control id="endDate" type="date" name="end_date" required />
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
      <AlertMsg open={alertOpen} setOpen={setalertOpen} msg={alertMsg} />
    </div>
  );
};
export default EditCurrentCycle;
