import React from "react";
import classes from "./Names.module.css";
import { NavLink } from "react-router-dom";

const Names = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={classes.name}>
      <p className={classes.text}>
        <NavLink to={path} activeClassName={classes.active}>
          <b> {props.name}</b>
        </NavLink>
      </p>
    </div>
  );
};
export default Names;
