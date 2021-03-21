import React, { useState } from "react";
import Customizer from "./Customizer";
import NftFrame from "./NftFrame";
import "./Home.css";

function Home() {
  const [textColor, setTextColor] = useState("#000");
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [itemId, setItemId] = useState("fakeItemId");

  return (
    <div>
      <div className="nft-frame">
        <NftFrame
          backgroundColor={backgroundColor}
          textColor={textColor}
          itemId={itemId}
        />
      </div>
      <div className="customizer">
        <Customizer
          backgroundColor={backgroundColor}
          textColor={textColor}
          onBackgroundColorChange={setBackgroundColor}
          onTextColorChange={setTextColor}
        />
      </div>
    </div>
  );
}

export default Home;
