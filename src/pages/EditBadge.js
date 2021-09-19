import { React, useState, useEffect, createRef } from "react";
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

const EditBadge = () => {
  //  Name, Description, Type, Points Needed, Enabled
  const [isFormHidden, setIsFormHidden] = useState(true);
  const [selectedBadgeId, setselectedBadgeId] = useState("");
  const [selectedBadgeName, setSelectedBadgeName] = useState("Select Badge");
  const [badges, setbadges] = useState([]);
  const editBadgeForm = createRef();

  useEffect(() => {
    BadgeService.adminGetBadges()
      .then((res) => {
        console.log("success ==> ", res.data);
        console.log(res.data);
        setbadges(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  {
    /* // Active: 1
      // AdminId: 1
      // Description: "description"
      // Name: "badge1"
      // PointsNeeded: 300
      // id: 1 */
  }

  const handleSelect = (eventKey, event) => {
    const id = eventKey;
    console.log("logg_1", eventKey);
    console.log("logg_2", event);

    const badge = badges.filter((badge) => badge.id == id)[0];

    editBadgeForm.current.name.value = badge.Name;
    editBadgeForm.current.desc.value = badge.Description;
    editBadgeForm.current.points.value = badge.PointsNeeded;
    editBadgeForm.current.type.value =
      badge.isDeveloper == 1 ? "developer" : "nonDeveloper";
    console.log("badge active", badge.Active);
    editBadgeForm.current.disabled.checked = badge.Active == 1 ? false : true;

    setSelectedBadgeName(event.target.innerText);
    setIsFormHidden(false);
    setselectedBadgeId(eventKey);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = selectedBadgeId;
    const name = e.target.name.value;
    const desc = e.target.desc.value;
    const points = e.target.points.value;
    const type = e.target.type.value;
    const disabled = e.target.disabled.checked;

    BadgeService.editBadge({ id, name, desc, points, type, disabled })
      .then((res) => {
        console.log("success ==> ", res.data);
        alert("done");
      })
      .catch((err) => console.log(err));
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
          ref={editBadgeForm}
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
                  {badges.map((badge) => (
                    <Dropdown.Item eventKey={badge.id}>
                      {badge.Name} ({badge.PointsNeeded})
                    </Dropdown.Item>
                  ))}
                  {/* <Dropdown.Item eventKey={1}>100 points Badge</Dropdown.Item>
                  <Dropdown.Item eventKey={2}>200 points Badge</Dropdown.Item>
                  <Dropdown.Item eventKey={3}> Developer Badge</Dropdown.Item> */}
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
              <Form.Control id="name" type="name" placeholder="" name="name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                id="desc"
                as="textarea"
                rows={3}
                name="description"
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
                  />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-3">
                  <Form.Label className="font-weight-bold pe-2">
                    Type
                  </Form.Label>
                  <select name="isDeveloper" id="type">
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
