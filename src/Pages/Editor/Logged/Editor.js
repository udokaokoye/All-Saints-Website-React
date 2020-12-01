import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Editor.css";
import moment from 'moment';
const Editor = () => {
  const [misc, setmisc] = useState(true);
  const [evt, setevt] = useState(false);
  const [dss, setdss] = useState(false);
  const [add_editor, setadd_editor] = useState(false);
  // MISC
  const [showcase_txt, setshowcase_txt] = useState("");
  const [banner_text, setbanner_text] = useState("");
  const [live_img, setlive_img] = useState("----");
  const [live_txt, setlive_txt] = useState("");
  const [cnt_phn, setcnt_phn] = useState("");
  const [cnt_email, setcnt_email] = useState("");
  const [live_service, setlive_service] = useState('')
  // EVENT
  const [evt_title, setevt_title] = useState('')
  const [evt_date, setevt_date] = useState('')
  const [evt_time, setevt_time] = useState('')
  const [evt_title_msg, setevt_title_msg] = useState(['', ''])
  const [evt_date_msg, setevt_date_msg] = useState(['', ''])
  const [evt_time_msg, setevt_time_msg] = useState(['', ''])
  const [events, setevents] = useState([])
  const [evt_msg, setevt_msg] = useState([false, '', ''])


  // MESSAGE BOX
  const [messagebox, setmessagebox] = useState([false, '', ''])

  // DSS
  const [dss_date, setdss_date] = useState('')
  const [dss_content, setdss_content] = useState('')
  const [dss_date_msg, setdss_date_msg] = useState(['', ''])
  const [dss_content_msg, setdss_content_msg] = useState(['', ''])

  // MISC
  const [misc_fetch, setmisc_fetch] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const history = useHistory();

  useEffect(() => {
    verify();
    fetchMisc()
    fetchEvents()
  }, []);

  const Logout = () => {
    removeCookie("user", { path: "/" });
    history.push("/editor/auth");
  };

  const verify = () => {
    if (cookies.user) {
      const url =
        "http://localhost/All%20Saints%20Backend/verify.php?mode=already_logged";

      const formData = new FormData();
      formData.append("user_id", cookies.user);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((res) => {
          if (res === "SUCCESS") {
            return;
          } else {
            history.push("/editor/auth");
          }
        })
        .catch((err) => console.log(err));
    } else {
      history.push("/editor/auth");
    }
  };

  const submitMisc = () => {
    verify()
    const formData = new FormData();
    formData.append("show_txt", showcase_txt);
    formData.append("banner_txt", banner_text);
    formData.append("live_img", live_img);
    formData.append("live_txt", live_txt);
    formData.append("cnt_phone", cnt_phn);
    formData.append("cnt_email", cnt_email);
    formData.append("live_service", live_service)

    const url = "http://localhost/All%20Saints%20Backend/misc.php";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        if (res === 'SUCCESS') {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setmessagebox([true, 'Updated Successfully', 'green'])
          fetchMisc();
        } else {
          setmessagebox([true, 'An error occured', 'red'])
          fetchMisc();
        }
      })
      .catch((err) => console.log(err));
  };

  const submitEvent = () => {
    if (evt_title === '') {
      setevt_title_msg(['Please fill in this field', 'red'])
      return;
    } else {
      setevt_title_msg([])
    }

    if (evt_date === '') {
      setevt_date_msg(['Please fill in this field', 'red'])
      return;
    } else {
      setevt_date_msg([])
    }

    if (evt_time === '') {
      setevt_time_msg(['Please fill in this field', 'red'])
      return;
    } else {
      setevt_time_msg([])
    }
    verify()
    const formData = new FormData();
    formData.append("evt_title", evt_title);
    formData.append("evt_date", evt_date);
    formData.append("evt_time", evt_time);

    const url = "http://localhost/All%20Saints%20Backend/event.php?mode=upl";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        if (res === 'SUCCESS') {
          setmessagebox([true, 'Event Added', 'green'])
          fetchEvents()
        }
      })
      .catch((err) => console.log(err));
  }

  const submitDss = () => {
    if (dss_date === '') {
      setdss_date_msg(['Please fill in this field', 'red'])
      return;
    } else {
      setdss_date_msg([])
    }

    if (dss_content === '') {
      setdss_content_msg(['Please fill in this field', 'red'])
      return;
    } else {
      setdss_content_msg([])
    }

    verify()
    const formData = new FormData();
    formData.append("dss_date", dss_date);
    formData.append("dss_content", dss_content);

    const url = "http://localhost/All%20Saints%20Backend/dss.php?mode=upl";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        if (res === 'SUCCESS') {
          setmessagebox([true, 'Dss Uploaded', 'green'])
        }
      })
      .catch((err) => console.log(err));
    // console.log(dss_content)
    // console.log(dss_date)


  }

  const fetchMisc = () => {
    const formData = new FormData();

    const url = "http://localhost/All%20Saints%20Backend/random.php?qr=all";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setmisc_fetch(res);
        setshowcase_txt(res['showcase_text']);
        setbanner_text(res['banner_txt']);
        setlive_txt(res['live_txt']);
        setcnt_phn(res['cnt_phone']);
        setcnt_email(res['cnt_email']);
        setlive_service(res['live_service'])
      })
      .catch((err) => console.log(err));
  };

  const fetchEvents = () => {

    const url = "http://localhost/All%20Saints%20Backend/event.php?mode=dwl";
    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((res) => {
        setevents(res)
        console.log(res)
      })
      .catch((err) => console.log(err));
  }

  const deleteEvent = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    const url = "http://localhost/All%20Saints%20Backend/event.php?mode=del";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        fetchEvents()
        if (res === 'SUCCESS') {
          setevt_msg([true, 'Deleted Event', 'green'])
        } else {
          setevt_msg([true, 'Error Deleting Event', 'red'])
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="editor">
      <div className="nav">
        <div className="logo">
          <h1>Content Management System</h1>
        </div>
        <div className="tabs">
          <div className="inner">
            <button
              onClick={() => {
                setmisc(true);
                setevt(false);
                setdss(false);
              }}
            >
              Misc
            </button>
            <button
              onClick={() => {
                setmisc(false);
                setevt(true);
                setdss(false);
              }}
            >
              Add Events
            </button>
            <button
              onClick={() => {
                setmisc(false);
                setevt(false);
                setdss(true);
              }}
            >
              Add Dss
            </button>

            <button
              onClick={() => {
                setmisc(false);
                setevt(false);
                setdss(false);
                setadd_editor(true)
              }}
            >
              Add Editor
            </button>
            <button className="logout" onClick={Logout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      {misc ? (
        <div className="misc">
          <h3 className="title">Please use form below to update contents</h3>

          {messagebox[0] !== false ? (
            <div className="message-box" style={{ background: messagebox[2] }}>
              <p>{messagebox[1]}</p>
            </div>
          ) : (
            ""
          )}
          <div className="form">
            <div className="inpt-div">
              <h3>Showcase Text</h3>
              <div className="input">
                <div className="inpt1">
                  <textarea
                    value={showcase_txt}
                    onChange={(val) => setshowcase_txt(val.target.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <small>please fill in this field</small>
                </div>
              </div>
            </div>

            <div className="inpt-div">
              <h3>Social Media Banner Text</h3>
              <div className="input">
                <div className="inpt1">
                  <textarea
                  value={banner_text}
                    onChange={(val) => setbanner_text(val.target.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <small>please fill in this field</small>
                </div>
              </div>
            </div>

            <div className="inpt-div">
              <h3>Live Service Banner</h3>
              <div className="input">
                <div className="inpt1">
                  <input type="file" name="" id="" />
                  <small>please select a file</small>
                </div>

                <div className="inpt2">
                  <input
                    value={live_txt}
                    onChange={(val) => setlive_txt(val.target.value)}
                    type="text"
                    name=""
                    id=""
                  />
                  <small>Image Text</small>
                </div>
              </div>
            </div>

            <div className="inpt-div">
              <h3>Contact Information</h3>
              <div className="input">
                <div className="inpt1">
                  <input
                  value={cnt_phn}
                    onChange={(val) => setcnt_phn(val.target.value)}
                    type="text"
                    name=""
                    id=""
                  />
                  <small>Contact Mobile</small>
                </div>

                <div className="inpt2">
                  <input
                  value={cnt_email}
                    onChange={(val) => setcnt_email(val.target.value)}
                    type="text"
                    name=""
                    id=""
                  />
                  <small>Contact E-mail</small>
                </div>
              </div>
            </div>

            <div className="inpt-div">
              <h3>Live Service URL</h3>
              <div className="input">
                <div className="inpt1">
                  <textarea
                  value={live_service}
                    onChange={(val) => setlive_service(val.target.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <small>please fill in this field</small>
                </div>
              </div>
            </div>

            <div className="submit">
              <button onClick={submitMisc}>Send</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {evt ? (
        <div className="event">
          <h3 className="title">Please use form below to add new event</h3>
          {messagebox[0] !== false ? (
            <div className="message-box" style={{ background: messagebox[2] }}>
              <p>{messagebox[1]}</p>
            </div>
          ) : (
            ""
          )}
          <button className='view_evt'>View Events</button>
          <div className="form">
            <div className="inpt-div">
              <h3>Event Title</h3>
              <div className="input">
                <div className="inpt1">
                  <input style={{borderColor: evt_title_msg[1]}} onChange={(val) => setevt_title(val.target.value)} type="text" name="" id="" />
                  <small style={{color: evt_title_msg[1], fontWeight: 'bold'}}>{evt_title_msg[0]}</small>
                </div>
              </div>
            </div>

            <div className="inpt-div">
              <h3>Event Date</h3>
              <div className="input">
                <div className="inpt1">
                  <input style={{borderColor: evt_date_msg[1]}} onChange={(val) => setevt_date(val.target.value)} type="date" name="" id="" />
                  <small style={{color: evt_date_msg[1], fontWeight: 'bold'}}>{evt_title_msg[0]}</small>
                </div>

                <div className="inpt2">
                  <input style={{borderColor: evt_time_msg[1]}} onChange={(val) => setevt_time(val.target.value)} type="time" name="" id="" />
                  <small>Event Time</small>
                  <small style={{color: evt_time_msg[1], fontWeight: 'bold'}}>{evt_title_msg[0]}</small>
                </div>
              </div>
            </div>

            <div className="submit">
              <button onClick={submitEvent}>Send</button>
            </div>
          </div>

          <div className="view_evt_div">
            <h1 className='title'>All Events</h1>
            {evt_msg[0] !== false ? (
            <div className="message-box" style={{ background: evt_msg[2] }}>
              <p>{evt_msg[1]}</p>
            </div>
          ) : (
            ""
          )}
            {events.map((evt) => {
              return (
                <div className="alr_evt">
              <h1>{evt.evt_title}</h1>
              <p>{moment(evt.evt_date).format("MMMM Do, YYYY")}</p>
              <p>{evt.evt_time} {evt.evt_time.substring(0, 2) > 12 ? ("pm") : ("am")}</p>
              <div className="del_but">
                <button onClick={() => deleteEvent(evt.id)}>Delete</button>
              </div>
            </div>
              )
            })}
          </div>
        </div>
      ) : (
        ""
      )}

      {dss ? (
      <div className="dss">
        <h3 className="title">Please use the form below to upload DSS</h3>
        {messagebox[0] !== false ? (
            <div className="message-box" style={{ background: messagebox[2] }}>
              <p>{messagebox[1]}</p>
            </div>
          ) : (
            ""
          )}
        <div className="form">
        <div className="inpt-div">
              <h3>Date</h3>
              <div className="input">
                <div className="inpt1">
                  <input style={{borderColor: dss_date_msg[1]}} onChange={(val) => setdss_date(val.target.value)} type="date" name="" id="" />
                  <small style={{color: dss_date_msg[1]}}>{dss_date_msg[0]}</small>
                </div>
              </div>
            </div>
            <div className="inpt-div">
              <h3>Content</h3>
              <div className="input">
                <div className="inpt1">
                  <textarea style={{borderColor: dss_content_msg[1]}} onChange={(val) => setdss_content(val.target.value)} name="" id="" cols="30" rows="10"></textarea>
                  <small style={{color: dss_content_msg[1]}}>{dss_content_msg[0]}</small>
                </div>
              </div>
            </div>

            <div className="submit">
              <button onClick={submitDss}>Send</button>
            </div>
        </div>
      </div>) : ''}
    
    <div className="add_editor">
      <h1 className='title'>Add Editor</h1>

      <div className="form">
      <div className="inpt-div">
              <h3>
                Full Name <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    // onChange={(val) => setcnt_lastName(val.target.value)}
                    type="text"
                    name="last-name"
                    id="last-name"
                  />
                  <small>Last Name</small>
                </div>

                <div className="inpt2">
                  <input
                    // onChange={(val) => setcnt_firstName(val.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                  />
                  <small>First Name</small>
                </div>
              </div>
            </div>

            <div className="inpt-div">
              <h3>Email <span>*</span></h3>
              <div className="input">
                <div className="inpt1">
                  <input type="email" name="" id="" />
                  <small >Enter email address</small>
                </div>
              </div>
            </div>

            <div className="inpt-div">
              <h3>
                Password <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    // onChange={(val) => setcnt_lastName(val.target.value)}
                    type="passwod"
                  />
                  <small>Enter Password</small>
                </div>

                <div className="inpt2">
                  <input
                    // onChange={(val) => setcnt_firstName(val.target.value)}
                    type="password"
                  />
                  <small>Reapeat Password</small>
                </div>
              </div>
            </div>

            <div className="submit">
              <button>Add!</button>
            </div>
      </div>
    </div>
    </div>
  );
};

export default Editor;
