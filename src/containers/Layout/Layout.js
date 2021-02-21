import React, { useState } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [state, setState] = useState({ showSideDrawer: false });

  const sideDrawerClosedHandler = () => {
    setState({ ...state, showSideDrawer: false });
  };
  const sideDrawerOpenHandler = () => {
    setState({ ...state, showSideDrawer: true });
  };

  return (
    <>
      <Toolbar openSideDrawer={sideDrawerOpenHandler} />
      <SideDrawer
        closed={sideDrawerClosedHandler}
        open={state.showSideDrawer}
      />
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
