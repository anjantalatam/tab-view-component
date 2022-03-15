import React from "react";
import "./tab.css";

function Tab(props) {
  if (props.parent !== "tabs") {
    throw Error("Tab is not a descendent of Tabs");
  }

  return <div className="tab-container">{props.children}</div>;
}

export default Tab;
