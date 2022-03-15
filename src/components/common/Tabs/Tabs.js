import React, { useState } from "react";
import "./tabs.css";

const Tabs = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  for (let child of children) {
    if (child.type.name !== "Tab") {
      throw Error("Warning Tabs has children that aren't Tab components");
    }
  }

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        {children.map((c, index) => {
          return (
            <button
              key={String(index)}
              className={activeTabIndex === index ? "selected" : null}
              onClick={() => setActiveTabIndex(index)}
            >
              {c.props.label}
            </button>
          );
        })}
      </div>
      {React.cloneElement(children[activeTabIndex], {
        parent: "tabs",
      })}
    </div>
  );
};

export default Tabs;
