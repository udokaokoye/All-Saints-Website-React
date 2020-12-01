import React, { useState, useEffect } from "react";
import moment from 'moment';
import "./Dss.css";
const Dss = () => {
  const [dss, setdss] = useState([])
  useEffect(() => {
    fetchDss()
  }, []);

  const fetchDss = () => {
    const formData = new FormData();
    const url = "http://localhost/All%20Saints%20Backend/dss.php?mode=dwl";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setdss(res)
        // console.log(res)
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <center>
        <div className="dss">
          <h1 className="dss-tit">DAILY SPIRITUAL STRENGTH (DSS)</h1>

          <h3>{moment(dss[0]).format("dddd, MMMM YYYY")}</h3>

          <p className="dss-txt" dangerouslySetInnerHTML={{__html: (dss[1])}} ></p>

        {/* <p>{dss[2]}</p> */}
          <h3 className="pubs">
            HQ, DIRECTORATE OF CHAPLAIN SERVICES (PROT) NIGERIAN ARMY
          </h3>
        </div>
      </center>
    </div>
  );
};

export default Dss;
