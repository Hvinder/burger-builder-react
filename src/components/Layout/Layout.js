import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [state, setState] = useState({ showSideDrawer: false });

  const sideDrawerClosedHandler = () => {
    setState({ ...state, showSideDrawer: false });
  };
  const sideDrawerOpenHandler = () => {
    setState({ ...state, showSideDrawer: true });
  };

  return (
    <Aux>
      <Toolbar openSideDrawer={sideDrawerOpenHandler} />
      <SideDrawer
        closed={sideDrawerClosedHandler}
        open={state.showSideDrawer}
      />
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
