import { Footer, Navbar } from "@/components";
import React, { Fragment } from "react";
import classes from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar />
  
        {children}
      </div>

      <Footer />
    </Fragment>
  );
};
