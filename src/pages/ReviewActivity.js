import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { DataGrid, AppBar, Tabs, Tab } from "@material-ui/core/";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivityService from "../services/ActivityService";
import { Link } from "react-router-dom";

import { Button, Row, Col } from "react-bootstrap";

const ReviewActivity = () => {
  const [value, setvalue] = useState(0);
  const [waitingData, setWaitingData] = useState([
    { activity: {}, employee: {} },
  ]);
  const [doneData, setDoneData] = useState([{ activity: {}, employee: {} }]);
  useEffect(() => {
    // TODO: Fetch all needed to review Activities
    console.log("getting review Data");
    ActivityService.getNeedsReview()
      .then((response) => {
        console.log("Success ========>", response.data);
        setWaitingData(response.data);
      })
      .catch((error) => {
        console.log("Error1 =====<", error);
      });
    ActivityService.getDoneReview()
      .then((response) => {
        console.log("Success ========>", response.data);
        setDoneData(response.data);
      })
      .catch((error) => {
        console.log("Error2 =====<", error);
      });
  }, []);

  const handleAcception = (data, eventType, callBack) => {
    const postData = {
      actId: data.activity.id,
      empId: data.employee.id,
      eventType: eventType,
    };
    ActivityService.setAcception(postData)
      .then((response) => {
        console.log("Success ========>", response.data);
        callBack();
      })
      .catch((error) => {
        console.log("Error3 =====<", error);
      });
  };
  const handleButtonClick = (data, eventType, e) => {
    console.log("handling ", data.activity, data.employee);
    let updateView = function () {};
    if (eventType === "accept") {
      updateView = function () {
        // move the Activtiy box from Waiting to Done
        setWaitingData(
          waitingData.filter((elm) => elm.activity.id != data.activity.id)
        );
        setDoneData([{ ...doneData, data }]);
      };
    } else e.currentTarget.className = "outline-success";

    handleAcception(data, eventType, updateView);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const handleChange = (event, newvalue) => {
    setvalue(newvalue);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const classes = useStyles();

  return (
    <>
      <div className="container my-4">
        <div
          className="card mx-auto"
          style={{ filter: "drop-shadow(0 0 0.2rem #000000)" }}
        >
          {/* <div className={classes.root}> */}
          <AppBar position="static">
            <Tabs
              aria-label="simple tabs"
              value={value}
              onChange={handleChange}
            >
              <Tab label="Waiting" {...a11yProps(0)} />
              <Tab label="Done" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel index={0} value={value}>
            {waitingData.map((data) => (
              <>
                <ActivityBox
                  activity={data.activity}
                  employee={data.employee}
                  clickHandler={handleButtonClick}
                />
                <hr />
              </>
            ))}
          </TabPanel>
          <TabPanel index={1} value={value}>
            {doneData.map((data) => (
              <>
                <ActivityBox
                  activity={data.activity}
                  employee={data.employee}
                  clickHandler={handleButtonClick}
                  DoneBox
                />
                <hr />
              </>
            ))}
          </TabPanel>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

const ActivityBox = (props) => {
  // Give the Activity, in props
  return (
    <div className="mx-3 my-1">
      <Row className="align-items-center">
        <Col>
          <h5>{props.activity && props.activity.name}</h5>
          <span>{props.activity && props.activity.desc}</span>
        </Col>
        <Col>
          <h5>By: {props.employee && props.employee.name}</h5>
        </Col>
        <Col xs="auto">
          <Button
            eventKey={7}
            variant={props.Done ? "success" : "outline-success"}
            size="lg"
            // onClick={() => props.clickHandler( Activity )}
            onClick={(e) =>
              props.clickHandler(
                { activity: props.activity, employee: props.employee },
                props.DoneBox ? "unaccept" : "accept",
                e
              )
            }
          >
            ✔
          </Button>{" "}
          {!props.DoneBox && (
            <Button variant="outline-dark" size="lg">
              Skip
            </Button>
          )}
          <Link
            to={"/ActivityView/" + (props.activity ? props.activity.id : "")}
          >
            <Button variant="outline-dark" size="lg">
              🛈
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ReviewActivity;
