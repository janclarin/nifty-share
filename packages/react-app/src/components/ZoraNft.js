import React from "react";
import { Image } from "react-bootstrap";
import "./ZoraNft.css";

function getMetadata(itemId) {
  // TODO: Retrieve image meta data from Zora Subgraph.
  console.log(itemId);
  return {
    name: "Happiness",
    contentURI:
      "https://ipfs.fleek.co/ipfs/bafybeictzyvhy6myserlgovoxbuxtgvhgrtvfp4mhvmjgyycmjfz4bmdvy",
  };
}

function ZoraNft(props) {
  const metadata = getMetadata(props.itemId);
  return (
    <div className="text-center">
      <Image className="img-fluid nft-image" src={metadata.contentURI} />
      <h1 className="nft-name">{metadata.name}</h1>
    </div>
  );
}

export default ZoraNft;
