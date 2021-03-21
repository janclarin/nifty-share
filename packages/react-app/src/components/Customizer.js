import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SketchPicker } from "react-color-hook";

function Customizer(props) {
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <h2>Background</h2>
          <SketchPicker
            color={props.backgroundColor}
            onChange={(color) => props.onBackgroundColorChange(color.hex)}
          />
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <h2>Text</h2>
          <SketchPicker
            color={props.textColor}
            onChange={(color) => props.onTextColorChange(color.hex)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Customizer;
