import React from "react";
import classes from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = (props) => {
  let messagesItem = props.messages.map((dialog) => (
    <Message id={dialog.id} status={dialog.status} message={dialog.message} />
  ));
  console.log(messagesItem);
  let newPostElement = React.createRef();

  const addMessage = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      {messagesItem}
      <div className={classes.main}>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addMessage}>sent</button>
      </div>
    </div>
  );
};
export default Messages;
