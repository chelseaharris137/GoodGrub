import { Navbar } from "./Navbar";
import React, { Fragment } from "react";
import classes from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar />
  
        {children}
      </div>

      <h2>This is footer</h2>
    </Fragment>
  );
};
