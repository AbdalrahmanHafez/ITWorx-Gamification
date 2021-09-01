import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, ListGroup, Row, Col, Card } from "react-bootstrap";
import { Redirect, Switch, Route, useParams } from "react-router-dom";
// you can use ActivityView = ({match}) instead
const ActivityView = () => {
  let { activityId } = useParams();
  console.log("activity id from url", activityId);

  return (
    <div className="container my-4">
      <div
        className="card mx-auto w-50"
        style={{ filter: "drop-shadow(0 0 0.2rem #000000)" }}
      >
        <Card>
          <Card.Header>
            <h3>Activity Name</h3>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>Description</h4>
              <span>the is the activity Descroption</span>
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              <h4>Perks</h4>
              <ul>
                <li>Points: 350pt</li>
                <li>Cretificate of compeletion</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <span>Starts on: 15-9-2021</span>
              <br />
              <span>Ends on: 15-9-2021</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default ActivityView;
