import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-1"></Col>
        <Col size="col-md-6">
          <h2>About Me</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-5">
          <img
            style={{ float: "left" }}
            src="./images/profile-pic.jpg"
            alt="profile-pic"
          />
          <p class="about-me">
            I am currently enrolled in the Full-Stack Web Development Bootcamp
            at the University of Texas at Austin. After taking an online course
            on the subject, I became eager to be among other aspiring Web
            Developers in a fast-paced and challenging environment. I have a
            newfound passion for the latest technologies used in making
            interactive and engaging websites. I am eager to increase my
            knowledge through personal study and professional work.
          </p>
          <p class="about-me">
            Through online studies and the coding bootcamp I am currently
            attending, I have made several personal websites showcasing my
            skills with HTML5 and CSS as well as a few flash animation games
            with Javascript. I was able to successfully build these projects
            with relentless trial and error and a passion for learning. There is
            a lot of satisfaction in getting my project to look and work the way
            I want it to and that will always make the process of getting there
            well worth it.
          </p>
          <p class="about-me">
            I am currently looking for a new career in Web Development. I would
            love to be apart of making your website visually appealing and
            engaging to your customers.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
