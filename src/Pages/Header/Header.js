import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = () => {
  const [navTrans, setnavTrans] = useState(false);

  // window.onscroll = () => {
  //   if (window.scrollY > 10) {
  //     setnavTrans(true);
  //   }

  //   if (window.scrollY < 1) {
  //     setnavTrans(false);
  //   }
  // };
  return (
    <React.Fragment>
      <header className={`hd-header ${navTrans ? "hd-trans" : ""}`}>
        <div className="home-logo">
          <div className="img-logo">
            <img src={require("../../assets/Chaplain.jpg")} alt="" />
          </div>
          <h1>Cathedral</h1>
        </div>
        <div className="home-links">
          <div className="home-links-inner">
            <NavLink className="home-link-default" to="/">
              Home
            </NavLink>
            <NavLink activeClassName={'nav-active'} className="home-link-default" to="/events">
              Events
            </NavLink>
            <NavLink activeClassName={'nav-active'} className="home-link-default" to="/sermon">
              Sermon
            </NavLink>
            <NavLink activeClassName={'nav-active'} className="home-link-default" to="/dss">
              DSS
            </NavLink>
            <NavLink activeClassName={'nav-active'} className="home-link-default" to="/contact">
              Contact
            </NavLink>

            <NavLink activeClassName={'nav-active'} className="home-link-default" to="/giving">
              Give
            </NavLink>
          </div>
        </div>
        <div className="menu">
        <FontAwesomeIcon
                          color="red"
                          className="bars"
                          style={{ cursor: "pointer" }}
                          onClick={() => alert("Menu Bar")}
                          icon={faBars}
                        />
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
