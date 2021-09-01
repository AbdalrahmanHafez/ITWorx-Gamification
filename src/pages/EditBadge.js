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

  return (
    <Form.Group className="mb-3 mt-5" style={{ textAlign: "center" }}>
      <DropdownButton
        className="mx-auto"
        id="dropdown-basic-button"
        title="Select badge ID"
      >
        <Dropdown.Item href="/EditBadge?">100 points Badge</Dropdown.Item>
        <Dropdown.Item href="/EditBadge?">200 points Badge</Dropdown.Item>
        <Dropdown.Item href="/EditBadge?">Developer Badge</Dropdown.Item>
      </DropdownButton>
    </Form.Group>
  );
};
export default EditBadge;
