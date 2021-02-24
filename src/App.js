import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = (props) => {
  console.log(props.state)
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              addPost={props.addPost}
              updatePost={props.updatePost}
            />
          )}
        />
        <Route
          path="/messages"
          render={() => <Dialogs state={props.state.messagesPage} />}
        />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/news" component={News} />
      </div>
    </div>
  );
};

export default App;
