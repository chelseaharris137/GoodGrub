import React, { Fragment} from "react";
import classes from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <h1>this is header</h1>

      <div className={classes.container}>
        {children}
      </div>

      <h2>This is footer</h2>
    </Fragment>
  );
};
