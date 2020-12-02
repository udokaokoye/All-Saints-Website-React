import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Dss.css";
const Dss = () => {
  const [dss, setdss] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    fetchDss();
  }, []);

  const fetchDss = () => {
    setisLoading(true);
    const formData = new FormData();
    const url = "http://localhost/All%20Saints%20Backend/dss.php?mode=dwl";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setdss(res);
        setisLoading(false);
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
      <center>
        <div className="dss">
          <h1 className="dss-tit">DAILY SPIRITUAL STRENGTH (DSS)</h1>

          <h3>{moment(dss[0]).format("dddd, MMMM YYYY")}</h3>

          <p
            className="dss-txt"
            dangerouslySetInnerHTML={{ __html: dss[1] }}
          ></p>

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
