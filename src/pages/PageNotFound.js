import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  DropdownButton,
  Dropdown,
  Button,
  Row,
  Col,
  ButtonGroup,
  Container,
} from "react-bootstrap";

const PageNotFound = () => {
  return (
    <div className="container my-5">
      <div
        className="card mx-5"
        style={{
          filter: "drop-shadow(0 0 0.2rem #000000)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ height: "10vh" }}></div>

          <Button className="w-25" variant="outline-danger" size="lg" href="/">
            <h4 className="m-5">404 Page not Found</h4>
            <br />
            🏠 <br /> Go Home
          </Button>
          <div style={{ height: "10vh" }}></div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
