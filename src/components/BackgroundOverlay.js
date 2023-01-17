import React from "react";
import Loader from "./Loader";

function BackgroundOverlay() {
  return (
    <div className="bg-overlay">
      <Loader />
    </div>
  );
}

export default BackgroundOverlay;
