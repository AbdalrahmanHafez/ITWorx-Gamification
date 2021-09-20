import { React, useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, ListGroup, Row, Col, Card, Button } from "react-bootstrap";
import { Redirect, Switch, Route, useParams } from "react-router-dom";
import ParticipatingEmployees from "./ParticipatingEmployees";
import ActivityService from "../services/ActivityService";
import { UserContext } from "../Store";

// you can use ActivityView = ({match}) instead
const ActivityView = (props) => {
  const [user, setUser] = useContext(UserContext);
  const { isAdmin } = user;
  const [subscribed, setsubscibed] = useState(false);
  let { activityId } = useParams();
  console.log("activity id from url", activityId);
  // const { allActivities } = props.location;
  const [actInfo, setactInfo] = useState({});
  // if (allActivities) {
  //   // From more info link
  //   console.log("loadign from cached activites");
  //   setactInfo(
  //     allActivities.filter((activity) => activity.id == activityId)[0]
  //   );
  // } else {
  useEffect(() => {
    console.log("sending ?");
    ActivityService.getInfo({ id: activityId })
      .then((response) => {
        console.log("Success ========>", response);
        setactInfo(response.data);
      })
      .catch((err) => console.log("Error ===<", err));
  }, []);
  // }

  useEffect(() => {
    // Is subscribed

    ActivityService.querySubscibed({ id: activityId })
      .then((response) => {
        console.log("Success ========>", response);
        setsubscibed(response.data);
      })
      .catch((err) => console.log("Error ===<", err));
  }, []);

  console.log(actInfo);

  const handleSubscribe = () => {
    // TODO: Axios subscibe to activity by id
    const { id } = actInfo;

    ActivityService.subscribe({ id: id })
      .then((response) => {
        console.log("Success ========>", response);
        if (response.status === 200) {
          setsubscibed(true);
        }
      })
      .catch((err) => console.log("Error ===<", err));
  };
  const handleUnSubscribe = () => {
    // TODO: Axios subscibe to activity by id
    const { id } = actInfo;

    ActivityService.unsubscribe({ id: id })
      .then((response) => {
        console.log("Success ========>", response);
        if (response.status === 200) {
          setsubscibed(false);
        }
      })
      .catch((err) => console.log("Error ===<", err));
  };

  let {
    name,
    description,
    totalPoints,
    startDate,
    endDate,
    virtualRecognition,
  } = actInfo;
  return (
    <>
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
                  <li>
                    {"Cretificate of compeletion:" +
                      (virtualRecognition ? virtualRecognition.toString() : "")}
                  </li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                <span>Starts on: {startDate}</span>
                <br />
                <span>Ends on: {endDate}</span>
              </ListGroup.Item>
            </ListGroup>
            <Form
              className="container px-5 mb-4 "
              action="http://localhost:8080/EmployeeSubscribeToActivity"
              method="POST"
              style={{ fontWeight: "bold", fontSize: "110%" }}
            >
              {!isAdmin && (
                <>
                  {subscribed ? (
                    <Button
                      onClick={handleUnSubscribe}
                      className="mt-5 w-100 subscribee"
                    >
                      Un-Subscribe
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubscribe}
                      className="mt-5 w-100 subscribee"
                    >
                      Subscribe
                    </Button>
                  )}
                </>
              )}
              <input
                type="hidden"
                id="activityId"
                name="activityId"
                value={activityId}
              />
            </Form>
            {/* TODO: Show success / fail message */}
          </Card>
        </div>
      </div>
      <div className="w-50 mx-auto">{/* <ParticipatingEmployees /> */}</div>
    </>
  );
};

export default ActivityView;
