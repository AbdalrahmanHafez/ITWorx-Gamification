import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import BadgeService from "../services/BadgeService";

import {
  Form,
  DropdownButton,
  Dropdown,
  Button,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";

const Badges = () => {
  const [allBadges, setAllBadges] = useState([]);
  useEffect(() => {
    // TODO: employee id
    BadgeService.getAll({ employeeId: 1 }).then((res) => {
      console.log(res.data);
      setAllBadges(
        res.data.map((obj, i) => ({
          key: i,
          badgeName: obj.Name,
          points: obj.PointsNeeded,
          description: obj.Description,
        }))
      );
      // Active: 1
      // AdminId: 1
      // Description: "description"
      // Name: "badge1"
      // PointsNeeded: 300
      // badgeId: 1
      // employeeId: 1
      // id: 1
      // isDeveloper: 1
    });
  }, []);

  return (
    <div className="container my-4">
      <div
        className="card mx-auto"
        style={{ filter: "drop-shadow(0 0 0.2rem #000000)" }}
      >
        <Row className="mt-4 mx-4 align-items-center">
          <h4>Gained Badges</h4>
        </Row>

        {allBadges.map((badge) => (
          <>
            <hr />
            <BadgeBox
              name={badge.badgeName}
              points={badge.points}
              description={badge.description}
            />
          </>
        ))}
      </div>
    </div>
  );
};

const BadgeBox = (props) => {
  // Give the Activity, in props
  return (
    <div className="mx-3 my-1">
      <Row className="align-items-center">
        <Col>
          <h5>{props.name}</h5>
        </Col>
        <Col xs="auto">
          <span>Description: {props.description}</span>
        </Col>
        <Col xs="auto">
          <span>Points needed:{props.points}</span>
        </Col>
      </Row>
    </div>
  );
};

export default Badges;
