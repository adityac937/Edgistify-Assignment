import React from "react";
import "./Inputing.css";
const input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          rows="5"
          class="InputingElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          class="InputingElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          class="InputingElement"
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {" "}
              {option.displayValue}{" "}
            </option>
          ))}{" "}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          class="InputingElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div class="Inputing">
      <label className="Labeling"> {props.label} </label> {inputElement}{" "}
    </div>
  );
};
export default input;
