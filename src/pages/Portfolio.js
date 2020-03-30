import React from "react";
import { Col, Row, Container } from "../components/Grid";
import ProjectCard from "../components/Project";
import projects from "../projects.json";
import Wrapper from "../components/Wrapper";

function Portfolio() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-1"></Col>
        <Col size="col-md-6">
          <h2>Portfolio</h2>
          <hr />
        </Col>
      </Row>
      <Wrapper>
        <Row>
          {projects.map(project => (
            <ProjectCard image={project.image} />
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
}

export default Portfolio;
