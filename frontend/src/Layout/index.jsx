import Navbar from "@/components/Navbar/Navbar";
import React, { Fragment } from "react";

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <div>{children}</div>
    </Fragment>
  );
}

export default Layout;
