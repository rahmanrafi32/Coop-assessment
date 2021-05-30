import React from "react";
import ApplyNow from "../../ApplyNow/ApplyNow";
import Home from "../HomeBanner/HomeBanner";
import LatestNews from '../LatestNews';
import OurPrincipal from '../OurPrincipal/OurPrincipal';
import Testimony from '../Testimony';
const MainHome = () => {
  return (
    <>
      <Home />
      <OurPrincipal/>
      <ApplyNow/>
      <LatestNews/>
      <Testimony/>
    </>
  );
};

export default MainHome;
