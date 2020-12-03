import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Home from "./Pages/Home/Home";
import Events from "./Pages/Events/Events";
import Sermon from "./Pages/Sermon/Sermon";
import DSS from "./Pages/Dss/Dss";
import Contact from "./Pages/Contact/Contact.js";
import Header from "./Pages/Header/Header";
import Dss from "./Pages/Dss/Dss";
import EditorAuth from "./Pages/Editor/Auth/Auth";
import Editor from "./Pages/Editor/Logged/Editor";
import Live from "./Pages/Live/Live";
import AdminAuth from './Pages/Admin/Auth/Auth';
import Admin from './Pages/Admin/Logged/Admin';
import Give from './Pages/Give/Give';
function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="container">
          <Route key={"/"} exact path={"/"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Home />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route key={"/contact"} exact path={"/contact"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Header />
                  <Contact />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route key={"/events"} exact path={"/events"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Header />
                  <Events />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route key={"/sermon"} exact path={"/sermon"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Header />
                  <Sermon />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route key={"/dss"} exact path={"/dss"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Header />
                  <Dss />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route key={"/editor/auth"} exact path={"/editor/auth"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <EditorAuth />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route key={"/admin/auth"} exact path={"/admin/auth"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <AdminAuth />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route key={"/editor"} exact path={"/editor"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Editor />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route key={"/admin"} exact path={"/admin"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Admin />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route key={"/live"} exact path={"/live"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Header />
                  <Live />
                </div>
              </CSSTransition>
            )}
          </Route>

          <Route key={"/giving"} exact path={"/giving"}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Header />
                  <Give />
                </div>
              </CSSTransition>
            )}
          </Route>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
