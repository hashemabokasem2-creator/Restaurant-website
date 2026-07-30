import React from "react";
import "./App.css";
import Navbarone from "./navbarone.jsx";
import Bookatabel from "./bookatabel.jsx";
import Sectionchef from "./sectionchef.jsx";
import BackToTop from "./backtotop.jsx";
import Meals from "./sectionmeals.jsx";
import StartersSection from "./StartersSection.jsx";

function App() {
  return (
    <>
      <BackToTop />
      <Navbarone />
      <Bookatabel />
      <Sectionchef />
      <Meals />
      <StartersSection />
    </>
  );
}

export default App;




// import StartersSection from "./StartersSection.jsx";
// import MainCoursesSection from "./MainCoursesSection.jsx";
// import DessertsSection from "./DessertsSection.jsx";
// import BeveragesSection from "./BeveragesSection.jsx";

// <div className="row custom-content-row">
//   <div className="col-12">
//     {activeTab === "starters" && <StartersSection />}
//     {activeTab === "main-courses" && <MainCoursesSection />}
//     {activeTab === "desserts" && <DessertsSection />}
//     {activeTab === "beverages" && <BeveragesSection />}
//   </div>
// </div>