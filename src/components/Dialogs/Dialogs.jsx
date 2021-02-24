import React from "react";
import classes from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
  //massive from server users

  let dialogsItems = props.state.dialogsData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  //развертка массива

  return (
    <div className={classes.main}>
      <div className={classes.names}>{dialogsItems}</div>
      <div className={classes.line}></div>
      <div className={classes.messages}>
        <Messages messages={props.state.messagesData} />
      </div>
    </div>
  );
};
export default Dialogs;
