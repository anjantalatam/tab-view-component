import React from "react";
import About from "./About";
import Home from "./Home";
import Tab from "./common/Tab/Tab";
import Tabs from "./common/Tabs/Tabs";

function TabView() {
  return (
    <div>
      <Tabs>
        <Tab label="Home">
          <Home />
        </Tab>
        <Tab label="About">
          <About />
        </Tab>
        {/* <div>an</div> */}
      </Tabs>
      {/* <Tab label="Test">test</Tab> */}
    </div>
  );
}

export default TabView;
