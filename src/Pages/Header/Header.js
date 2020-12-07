import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars, faTimes
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = () => {
  const [navTrans, setnavTrans] = useState(false);
  const [sideBar, setsideBar] = useState(false);

  // window.onscroll = () => {
  //   if (window.scrollY > 10) {
  //     setnavTrans(true);
  //   }

  //   if (window.scrollY < 1) {
  //     setnavTrans(false);
  //   }
  // };

  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function enableScrolling() {
    window.onscroll = function () {};
  }

  const open = {
    transition: "all 0.5s ease-in-out",
    height: "100vh",
    width: "75%",
    backgroundColor: "#242424",
    transform: "translateX(0px)",
  };

  const close = {
    transition: "all 0.5s ease-in-out",
    height: "100%",
    width: "0%",
    backgroundColor: "white",
    transform: "translateX(-300px)",
  };

  if (sideBar === false) {
    enableScrolling();
  } else {
    disableScrolling();
  }
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
                          onClick={() => sideBar ? setsideBar(false) : setsideBar(true)}
                          icon={faBars}
                        />
        </div>
      </header>
    
    <div className="overlay-side" style={{display: sideBar ? "block" : "none"}}></div>
    
    <div className="sidebar" style={sideBar ? open : close}>
        <div className="bar">
          <span onClick={() => setsideBar(false)}><FontAwesomeIcon
                          className="bars"
                          style={{ cursor: "pointer" }}
                          icon={faTimes}
                        /></span>
        </div>
        <div className="sidebar-links">
          <div className="nv-lk">
          <NavLink activeClassName={'side-active'} className="side-link-default lnk" to="/">
              Home
            </NavLink>
          </div>

          <div className="nv-lk">
          <NavLink activeClassName={'side-active'} className="side-link-default lnk2" to="/events">
              Events
            </NavLink>
          </div>

          <div className="nv-lk">
          <NavLink activeClassName={'side-active'} className="side-link-default lnk3" to="/sermon">
              Sermon
            </NavLink>
          </div>

          <div className="nv-lk">
          <NavLink activeClassName={'side-active'} className="side-link-default lnk4" to="/dss">
              Dss
            </NavLink>
          </div>

          <div className="nv-lk">
          <NavLink activeClassName={'side-active'} className="side-link-default lnk5" to="/contact">
              Contact
            </NavLink>
          </div>

          <div className="nv-lk">
          <NavLink activeClassName={'side-active'} className="side-link-default lnk6" to="/giving">
              Give
            </NavLink>
          </div>
        </div>
    </div>
    </React.Fragment>
  );
};

export default Header;
