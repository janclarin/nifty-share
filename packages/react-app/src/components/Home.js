import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Customizer from "./Customizer";
import Frame from "./Frame";
import "./Home.css";

function Home() {
  const [textColor, setTextColor] = useState("#000");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [itemId, setItemId] = useState("fakeItemId");

  return (
    <Container className="d-flex flex-column align-items-center">
      <Frame
        backgroundColor={backgroundColor}
        textColor={textColor}
        itemId={itemId}
      />
      <Customizer
        className="customizer"
        backgroundColor={backgroundColor}
        textColor={textColor}
        onBackgroundColorChange={setBackgroundColor}
        onTextColorChange={setTextColor}
      />
    </Container>
  );
}

export default Home;
