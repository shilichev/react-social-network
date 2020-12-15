import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div>
      <div className={classes.main}>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post message="Hello, world" />
      <Post message="How are u?"/>
    </div>
  );
};

export default MyPosts;
