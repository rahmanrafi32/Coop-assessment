import React from "react";
import Home from "../HomeBanner/HomeBanner";
import OurPrincipal from '../OurPrincipal/OurPrincipal';
import OurTeacher from "../OurTeacher/OurTeacher";
import LatestNews from '../LatestNews'
import Testimony from '../Testimony'
const MainHome = () => {
  return (
    <>
      <Home />
      <OurPrincipal/>
      <OurTeacher/>
      <LatestNews/>
      <Testimony/>
    </>
  );
};

export default MainHome;
