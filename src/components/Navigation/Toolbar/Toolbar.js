import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import "../NavigationItems/NavigationItems";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div onClick={props.openSideDrawer} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Logo height="80%" />
    <div className={classes.DesktopOnly}>
      <NavigationItems />
    </div>
  </header>
);
export default Toolbar;
