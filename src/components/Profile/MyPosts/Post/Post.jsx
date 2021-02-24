import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img
        src="https://cs.pikabu.ru/post_img/big/2013/03/24/11/1364151276_1033470148.png"
        alt="Ups"
      />
      <p>{props.message} </p>
    </div>
  );
};

export default Post;
