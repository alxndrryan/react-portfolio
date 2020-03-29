import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Contact() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-1"></Col>
        <Col size="col-md-6">
          <h2>Contact</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col size="md-1"></Col>
        <Col size="sm-6">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div className="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder=""
                  id="exampleInputPassword1"
                />
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
