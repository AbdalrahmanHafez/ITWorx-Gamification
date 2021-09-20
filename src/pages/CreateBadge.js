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
import BadgeService from "../services/BadgeService";
import AlertMsg from "../components/AlertMsg";

const CreateBadge = () => {
  //  Name, Description, Type, Points Needed, Enabled
  const [alertOpen, setalertOpen] = useState(false);
  const [alertMsg, setalertMsg] = useState("");
  const popUpAlert = (message) => {
    setalertMsg(message);
    setalertOpen(true);
    setTimeout(() => {
      setalertOpen(false);
    }, 1000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    const name = e.target.name.value;
    const desc = e.target.desc.value;
    const points = e.target.points.value;
    const type = e.target.type.value;
    const disabled = e.target.disabled.checked;

    BadgeService.Create({ name, desc, points, type, disabled })
      .then((res) => {
        console.log("success ==> ", res.data);
        // alert("done");
        popUpAlert("Done");
      })
      .catch((err) => {
        console.log(err);
        popUpAlert("Something Went Wrong");
      });

    // e.BadgeService;
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
        <h1 className="m-5">Add New Badge</h1>
        <Form
          className="container px-5 mb-4 "
          style={{ fontWeight: "bold", fontSize: "110%" }}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="font-weight-bold">Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Interview Employees"
              name="name"
              id="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              id="desc"
              as="textarea"
              rows={3}
              name="description"
              required
            />
          </Form.Group>
          <Row className="g-3">
            <Col xs={10}>
              <Form.Group
                className="mb-3 w-25"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="font-weight-bold">
                  Points Needed
                </Form.Label>
                <Form.Control
                  id="points"
                  type="name"
                  placeholder="ex : 300"
                  name="pointsNeeded"
                  required
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label className="font-weight-bold pe-2">Type</Form.Label>
                <select name="isDeveloper" id="type" required>
                  <option value="developer">Developer</option>
                  <option value="nonDeveloper">Non Developer</option>
                </select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="disabled"
                  label={`Disabled`}
                  name="disabled"
                  required
                />
              </Form.Group>
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
        <AlertMsg open={alertOpen} setOpen={setalertOpen} msg={alertMsg} />
      </div>
    </div>
  );
};

export default CreateBadge;
