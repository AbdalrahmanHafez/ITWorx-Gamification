import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Slideshow = () => {
  return (
    <div class="Slideshow">
      <Carousel fade variant="dark" controls={false}>
        <Carousel.Item variant="dark">
          <h1>helooooooo</h1>
          <p>
            otherText
            <br />
            someText
            <br />
            someText
            <br />
            someText
            <br />
            someText
            <br />
            someText
            <br />
            someText
            <br />
            <br />
            someText
            <br />
            <br />
          </p>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <h2>Welcome</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slideshow;
