import React from "react";
import { Row, Col, Container } from "react-grid-system";
import "../scss/App.scss"

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Container>
          <Row>
            <Col md={8}>
                <h2 style={{color: "#FFFFFF"}}>Study Buddy</h2>
            </Col>
            <Col md={1}><h4>Resources</h4></Col>
            <Col md={1}><h4>About</h4></Col>
            <Col md={1}><h4>Sign In</h4></Col>
            <Col md={1}>
                <button type="button" className="upload">Upload</button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navbar;
