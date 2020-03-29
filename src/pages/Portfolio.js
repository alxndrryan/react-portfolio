import React from "react";
import { Col, Row, Container } from "../components/Grid";

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
    </Container>
  );
}

export default Portfolio;
