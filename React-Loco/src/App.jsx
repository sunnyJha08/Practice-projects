import React from "react";
import Page from "./components/Page";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <div>
      <Page />
      <Page />
      <Page />
      <h1>Neovim Config Test</h1>
    </div>
  );
};

export default App;

