import React from "react";
import { Image } from "react-bootstrap";
import "./NftFrame.css";

function getMetadata(itemId) {
  // TODO: Retrieve image meta data from Zora Subgraph.
  console.log(itemId);
  return {
    name: "Happiness",
    contentURI:
      "https://ipfs.fleek.co/ipfs/bafybeictzyvhy6myserlgovoxbuxtgvhgrtvfp4mhvmjgyycmjfz4bmdvy",
  };
}

function NftFrame(props) {
  const metadata = getMetadata(props.itemId);

  return (
    <div
      className="frame"
      style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
    >
      <div className="text-center">
        <Image className="img-fluid nft-image" src={metadata.contentURI} />
        <h1 className="nft-name">{metadata.name}</h1>
      </div>
    </div>
  );
}

export default NftFrame;
