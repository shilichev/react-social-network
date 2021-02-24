import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  const addPost = () => {
    props.addPost(newPostElement.current.value);
  };

  const postsItem = props.postsData.map((item) => (
    <Post message={item.message} />
  ));

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePost(text);
  };

  return (
    <div>
      <div className={classes.main}>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPost}
        />
        <button onClick={addPost}>Add Post</button>
      </div>
      {postsItem}
    </div>
  );
};

export default MyPosts;
