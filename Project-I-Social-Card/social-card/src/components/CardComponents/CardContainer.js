import React from "react";
import "./Card.css";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  let redirect = (url) => {
    window.location.href = { url };
  };
  return (
    <div onClick={redirect}>
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;
