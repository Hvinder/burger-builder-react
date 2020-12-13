import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

const Layout = (props) => (
  <Aux>
    <div>Toolbar, SIdeDrawer, Backdrawer</div>
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default Layout;
