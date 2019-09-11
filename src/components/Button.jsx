import React from "react";

const isOperator = val => !isNaN(val) || val === ".";

const Button = props => {
  return (
    <div
      className={`btn-wrapper ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
