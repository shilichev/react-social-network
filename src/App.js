import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
     
        <div className="app-wrapper-content">
          <Route path='/profile' component={Profile} />
          <Route  path='/messages' component={Dialogs} />
          <Route path='/music' component={Music} />
          <Route  path='/settings' component={Settings} />
          <Route  path='/news' component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
