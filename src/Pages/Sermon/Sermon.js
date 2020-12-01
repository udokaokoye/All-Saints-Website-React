import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Sermon.css";
const Sermon = () => {
  return (
    <div>
      <div className="sermon">
        <div className="ser-showcase">
          <div className="overlay">
            <div className="small-bar">
              <h3>God is working His Purpose out</h3>
            </div>
            <div className="small-bar-2">
              <h3>COL (VEN) NZ DAVOU</h3>
            </div>
          </div>
        </div>
        <div className="btm-bar">
          <div className="inner">
            <h1>27th September 2020 - 10:00 Am</h1>
            <button>
              <FontAwesomeIcon className="" icon={faPlayCircle} /> Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sermon;
