import React from "react";
import classes from "./Messages.module.css";
import { NavLink } from "react-router-dom";

const Messages = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={classes.message}>
      <p className={classes.text}>
        <b> {props.message}</b>
      </p>
    </div>
  );
};
export default Messages;
