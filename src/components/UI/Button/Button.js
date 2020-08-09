import React from "react";
import "./Button.css";
const button = (props) => (
  <button class={["Button", [props.btnType]].join(" ")} onClick={props.clicked}>
    {" "}
    {props.children}{" "}
  </button>
);
export default button;
