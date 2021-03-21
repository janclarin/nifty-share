import React from "react";
import ZoraNft from "./ZoraNft";
import "./Frame.css";

function Frame(props) {
  return (
    <div
      className="frame"
      style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
    >
      <ZoraNft itemId={props.itemId} />
    </div>
  );
}

export default Frame;
