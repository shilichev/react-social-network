import React from "react";
import classes from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import Names from "./Names/Names";

const Dialogs = (props) => {
  let dialogsData = [
    { name: "Danila", id: "1" },
    { name: "Masha", id: "2" },
    { name: "Sasha", id: "3" },
    { name: "Roma", id: "4" },
  ]; //massive from server users

  let dialogsItems = dialogsData.map((dialog) => (
    <Names name={dialog.name} id={dialog.id} />
  )); //развертка массива

  let messagesData = [
    { message: "Hi", id: "1" },
    { message: "Hello", id: "2" },
    { message: "How are u", id: "3" },
    { message: "I'm fine", id: "4" },
  ];
  let messagesItems = messagesData.map((dialog) => (
    <Messages message={dialog.message} id={dialog.id} />
  ));

  return (
    <div className={classes.main}>
      <div className={classes.names}>{dialogsItems}</div>
      <div className={classes.line}></div>
      <div className={classes.messages}>{messagesItems}</div>
    </div>
  );
};
export default Dialogs;
