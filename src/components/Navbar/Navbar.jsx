import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>
          <b>Profile</b>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/messages" activeClassName={classes.active}>
          <b>Messages</b>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>
          <b>News</b>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>
          <b>Music</b>
        </NavLink>
      </div>
      <div className={`${classes.settings} ${classes.item}`}>
        <NavLink to="/settings" activeClassName={classes.active}>
          <b>Settings</b>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
