import React from "react";
import "./Input.css";
const input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          class="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          class="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          class="InputElement"
          value={props.value}
          onChange={props.changed}
        >
          {" "}
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {" "}
              {option.displayValue}{" "}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          class="InputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div class="Input">
      <label class="Label"> {props.label} </label> {inputElement}{" "}
    </div>
  );
};
export default input;
