import React from "react";

const ClearButton = props => {
  return (
    <div className="clr-btn" onClick={() => props.handleClear()}>
      {props.children}
    </div>
  );
};

export default ClearButton;
