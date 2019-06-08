import React, { Component } from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "reactstrap";
import Deneme from "../components/Deneme";
export default class Homepage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col className="Container">
            <Deneme />
          </Col>
        </Row>
      </Container>
    );
  }
}
