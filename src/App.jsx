import React from "react";
import "./App.css";
import Navbarone from "./navbarone.jsx";
import Bookatabel from "./bookatabel.jsx";
import Sectionchef from "./sectionchef.jsx";
import BackToTop from "./backtotop.jsx";
import Meals from "./sectionmeals.jsx";
import Testimonials from "./Testimonials.jsx";
import Chefs from "./Chefs.jsx";
import Formseginin from "./segin-in.jsx";

function App() {
  return (
    <>
      <BackToTop />
      <Navbarone />
      <Bookatabel />
      <Sectionchef />
      <Meals />
      <Testimonials />
      <Chefs />
      <Formseginin />
    </>
  );
}

export default App;