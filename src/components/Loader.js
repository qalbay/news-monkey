import React, { Component } from "react";
import spinner from "../../src/spinner.gif";

export default function Loader() {
  return (
    <div className="text-center">
      <img src={spinner} alt="" style={{ height: "80px" }} />
    </div>
  );
}
