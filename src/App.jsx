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
import Maptorestaurant from "./Maptorestaurant.jsx";
import Dining from "./dining.jsx";
import Choose from "./Choose.jsx";
import Bookaservice from "./formss.jsx";

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
      <Maptorestaurant />
      <Dining />
      <Choose />
      <Bookaservice />
    </>
  );
}

export default App;