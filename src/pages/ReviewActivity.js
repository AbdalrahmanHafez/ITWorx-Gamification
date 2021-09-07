import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { DataGrid, AppBar, Tabs, Tab } from "@material-ui/core/";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Row, Col } from "react-bootstrap";

const ReviewActivity = () => {
  const [value, setvalue] = useState(0);
  useEffect(() => {
    // TODO: Fetch all needed to review Activities
  }, []);

  const handleButtonClick = (activity) => {
    console.log(activity);
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
            <ActivityBox clickHandler={handleButtonClick} />
            <hr />
            <ActivityBox clickHandler={handleButtonClick} />
            <hr />
            <ActivityBox clickHandler={handleButtonClick} />
            <hr />
            <ActivityBox clickHandler={handleButtonClick} />
          </TabPanel>
          <TabPanel index={1} value={value}>
            <ActivityBox clickHandler={handleButtonClick} />
            <hr />
            <ActivityBox clickHandler={handleButtonClick} />
            <hr />
            <ActivityBox clickHandler={handleButtonClick} />
            <hr />
            <ActivityBox clickHandler={handleButtonClick} />
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
          <h5>Activity Name</h5>
          <span>this is some the activity Description</span>
        </Col>
        <Col>
          <h5>Employee Name</h5>
          <span>submitted: 10-2-2021</span>
        </Col>
        <Col xs="auto">
          <Button
            eventKey={7}
            variant="outline-success"
            size="lg"
            // onClick={() => props.clickHandler( Activity )}
            onClick={() => props.clickHandler(1)}
          >
            ✔
          </Button>{" "}
          <Button
            variant="outline-dark"
            size="lg"
            onClick={() => props.clickHandler(3)}
          >
            🛈
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ReviewActivity;
