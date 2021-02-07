import React from "react";
import burgetLogo from "../../assests/images/burger-logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => (
  <div
    className={classes.Logo}
    style={{ height: props.height, marginBottom: props.marginBottom }}
  >
    <img src={burgetLogo} alt="MyBurger" />
  </div>
);

export default Logo;
