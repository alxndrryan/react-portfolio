import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Portfolio() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-1"></Col>
        <Col size="col-md-6">
          <h1>Portfolio</h1>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
