import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, ListGroup, Row, Col, Card, Button } from "react-bootstrap";
import { Redirect, Switch, Route, useParams } from "react-router-dom";
// you can use ActivityView = ({match}) instead
const ActivityView = (props) => {
  let { activityId } = useParams();
  console.log("activity id from url", activityId);
  const { allActivities } = props.location;
  let actInfo = {};
  if (allActivities) {
    // From more info link
    actInfo = allActivities.filter((activity) => activity.id == activityId)[0];
  } else {
    // Get the data
    // TODO: Axios get activity by id
    // name = "Activity Name";
    // description = "no description";
    // totalPoints = 310;
    // startDate = "2021-9-5";
  }
  console.log(actInfo);

  const handleSubscribe = () => {
    // TODO: Axios subscibe to activity by id
    const { id } = actInfo;
  };

  const { name, description, totalPoints, startDate, endDate } = actInfo;
  return (
    <div className="container my-4">
      <div
        className="card mx-auto w-50"
        style={{ filter: "drop-shadow(0 0 0.2rem #000000)" }}
      >
        <Card style={{ justifyContent: "center" }}>
          <Card.Header style={{ textAlign: "center" }}>
            <h3>{name}</h3>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>Description</h4>
              <span>{description}</span>
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              <h4>Perks</h4>
              <ul>
                <li>Points: {totalPoints}</li>
                <li>Cretificate of compeletion</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <span>Starts on: {startDate}</span>
              <br />
              <span>Ends on: {endDate}</span>
            </ListGroup.Item>
          </ListGroup>
          <Button onClick={handleSubscribe} className="mt-5 w-100 subscribee">
            Subscribe
          </Button>
          {/* TODO: Show success / fail message */}
        </Card>
      </div>
    </div>
  );
};

export default ActivityView;
