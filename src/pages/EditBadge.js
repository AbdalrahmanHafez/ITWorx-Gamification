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

const EditBadge = () => {
  //  Name, Description, Type, Points Needed, Enabled
  const [isFormHidden, setIsFormHidden] = useState(true);
  const [selectedBadgeId, setselectedBadgeId] = useState("");
  const [selectedBadgeName, setSelectedBadgeName] = useState("Select Badge");
  const handleSelect = (eventKey, event) => {
    console.log("logg_1", eventKey);
    console.log("logg_2", event);
    setSelectedBadgeName(event.target.innerText);
    setIsFormHidden(false);
    setselectedBadgeId(eventKey);
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
          method="POST"
          action="http://localhost:8080/badge/EditBadge"
          className="container px-5 mb-4"
          style={{ fontWeight: "bold", fontSize: "110%" }}
        >
          <Row className="align-items-center">
            <Col>
              <h1 className="m-5">Edit Badge</h1>
            </Col>
            <Col>
              <Form.Group className="mb-2" style={{ textAlign: "center" }}>
                <DropdownButton
                  variant="light"
                  className="mx-auto"
                  id="dropdown-select-badge"
                  title={selectedBadgeName}
                  onSelect={handleSelect}
                >
                  <Dropdown.Item eventKey={1}>100 points Badge</Dropdown.Item>
                  <Dropdown.Item eventKey={2}>200 points Badge</Dropdown.Item>
                  <Dropdown.Item eventKey={3}> Developer Badge</Dropdown.Item>
                </DropdownButton>
                <input
                  type="hidden"
                  id="badgeId"
                  name="badgeId"
                  value={selectedBadgeId}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className={isFormHidden ? "hidden" : ""}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="font-weight-bold">Name</Form.Label>
              <Form.Control type="name" placeholder="" name="name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" />
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
                    type="name"
                    placeholder="ex : 300"
                    name="pointsNeeded"
                  />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-3">
                  <Form.Label className="font-weight-bold pe-2">
                    Type
                  </Form.Label>
                  <select name="isDeveloper">
                    <option value="developer">Developer</option>
                    <option value="nonDeveloper">Non Developer</option>
                  </select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id={`default-checkbox`}
                    label={`Disabled`}
                    name="disabled"
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
          </div>
        </Form>
      </div>
    </div>
  );
};
export default EditBadge;
