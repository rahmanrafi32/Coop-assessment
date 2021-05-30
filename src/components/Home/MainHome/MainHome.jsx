import React from "react";
import ApplyNow from "../ApplyNow/ApplyNow";
import Home from "../HomeBanner/HomeBanner";
import OurPrincipal from '../OurPrincipal/OurPrincipal';
import OurTeacher from "../OurTeacher/OurTeacher";

const MainHome = () => {
  return (
    <>
      <Home />
      <OurPrincipal/>
      <OurTeacher/>
      <ApplyNow/>
    </>
  );
};

export default MainHome;
