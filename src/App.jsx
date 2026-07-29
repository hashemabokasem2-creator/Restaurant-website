import React from "react";
import "./App.css";
import Navbarone from "./navbarone.jsx";
import Bookatabel from "./bookatabel.jsx";
import Sectionchef from "./sectionchef.jsx";
import BackToTop from "./backtotop.jsx";

function App() {
  return (
    <>
      <BackToTop />
      <Navbarone />
      <Bookatabel />
      <Sectionchef />
    </>
  );
}

export default App;
