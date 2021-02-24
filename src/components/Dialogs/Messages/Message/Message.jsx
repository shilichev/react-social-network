import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  console.log(props);

  return (
    <div id={props.id} className={props.status ? classes.accept : classes.sent}>
      <p>
        <b> {props.message}</b>
      </p>
    </div>
  );
};
export default Message;
