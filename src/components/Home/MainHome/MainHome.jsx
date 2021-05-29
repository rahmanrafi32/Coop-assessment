import React from "react";
import Home from "../HomeBanner/HomeBanner";
import OurPrincipal from '../OurPrincipal/OurPrincipal';
import OurTeacher from "../OurTeacher/OurTeacher";

const MainHome = () => {
  return (
    <>
      <Home />
      <OurPrincipal/>
      <OurTeacher/>
    </>
  );
};

export default MainHome;
