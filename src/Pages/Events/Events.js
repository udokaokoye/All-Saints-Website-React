import React, { useEffect, useState } from "react";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./Events.css";
const Events = () => {
  const [events, setevents] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    fetchEvents();
    console.log(moment().format("MMM do"));
  }, []);

  const fetchEvents = () => {
    setisLoading(true);
    const url =
      "http://localhost/All%20Saints%20Backend/event.php?mode=dwl-ord";
    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((res) => {
        setisLoading(false);
        setevents(res);
        // console.log(res);
        console.log(res.slice(0, 1));
      })
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F1F2F3",
        }}
      >
        <img width="8%" src={require("../../assets/loader1.gif")} alt="" />
      </div>
    );
  }
  return (
    <div>
      <section className="showc">
        <div className="overlay">
          <h1 className="upcevt">Upcoming Events</h1>
          {events.slice(0, 1).map((evt) => {
            return (
              <div className="content">
                <div className="dt">
                  <h1>
                    {moment(evt.evt_date).format("MMMM Do YYYY")} @{" "}
                    {evt.evt_time}{" "}
                    {evt.evt_time.substring(0, 2) > 12 ? "pm" : "am"}
                  </h1>
                </div>
                <div className="evt">
                  <h1>{evt.evt_title}</h1>
                </div>
                <div className="cnt">
                  <div className="countdw-evt">
                    <span className="d">
                      <span>0</span> <span>Days</span>
                    </span>
                    <span className="hr">
                      <span>0</span> <span>Hours</span>
                    </span>
                    <span className="mi">
                      <span>0</span> <span>Minutes</span>
                    </span>
                    <span className="se">
                      <span>0</span> <span>Seconds</span>
                    </span>
                  </div>
                </div>
                <div className="dwn">
                  <a href="#evt-info">
                    <FontAwesomeIcon className="angdwn" icon={faAngleDown} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="evntprop">
        <div className="overlay"></div>

        <div className="content">
          {events.slice(0, 4).map((evt) => {
            return (
              <div className="evt1">
                <div className="calendar">
                  <span className="dt-no">
                    {moment(evt.evt_date).format("D")}
                  </span>
                  <span className="dt-nm">
                    {moment(evt.evt_date).format("MMM")}
                  </span>
                </div>
                <div className="evtnm">
                  <h1>{evt.evt_title}</h1>
                </div>

                <div className="dt-loc">
                  <p>
                    {evt.evt_time}{" "}
                    {evt.evt_time.substring(0, 2) > 12 ? "pm" : "am"}
                  </p>
                  <p>@ The Cathedral</p>
                </div>

                <button>Read More</button>
              </div>
            );
          })}
        </div>
      </section>

      {/* {events.splice(0, 1).events.map((evt) => {
        return (
          <h1>{evt[1]}</h1>
        )
      })} */}

      {/* <div className="evt-info" id="evt-info"></div> */}
    </div>
  );
};

export default Events;
