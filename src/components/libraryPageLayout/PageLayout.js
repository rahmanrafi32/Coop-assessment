import React from "react";
import Nav from "./Nav";

function PageLayout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

export default PageLayout;
