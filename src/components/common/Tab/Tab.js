import React from "react";
import "./tab.css";

function Tab(props) {
  return <div className="tab-container">{props.children}</div>;
}

export default Tab;
