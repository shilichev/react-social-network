import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg" />
      </div>
      <div>
        <img
          src="https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg"
          width="200px"
        />
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
