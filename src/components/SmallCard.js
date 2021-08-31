import { React, useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const SmallCard = (props) => {
  return (
    <div style={{ filter: "drop-shadow(0 0 0.2rem #000000)" }}>
      <Card className="text-center" style={{ width: "10rem" }}>
        {/* <Card.Header></Card.Header> */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
};
export default SmallCard;
