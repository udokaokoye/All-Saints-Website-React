import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";
const Admin = () => {
  const [sideBar, setsideBar] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["admin"]);
  const history = useHistory();
  const [contact, setcontact] = useState(true);
  const [prayer_Req, setprayer_Req] = useState(false);
  const [add_editor, setadd_editor] = useState(false);
  const [add_admin, setadd_admin] = useState(false);
  const [cnt_fetch, setcnt_fetch] = useState([]);
  const [pry_fetch, setpry_fetch] = useState([]);

  const [edt_firstname, setedt_firstname] = useState("");
  const [edt_lastname, setedt_lastname] = useState("");
  const [edt_email, setedt_email] = useState("");
  const [edt_password, setedt_password] = useState("");
  const [edt_cnfrPassword, setedt_cnfrPassword] = useState("");

  const [adm_firstname, setadm_firstname] = useState("");
  const [adm_lastname, setadm_lastname] = useState("");
  const [adm_email, setadm_email] = useState("");
  const [adm_password, setadm_password] = useState("");
  const [adm_cnfrPassword, setadm_cnfrPassword] = useState("");

  const [messagebox, setmessagebox] = useState([false, "", ""]);

  const [all_edt, setall_edt] = useState([]);
  const [all_adm, setall_adm] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    verify();
    fetchContact();
    fetchPrayerRequest();
    fetchEditor();
    fetchAdmin();
  }, []);

  function disableScrolling() {
    window.scrollTo(0, 0);
  }

  window.scrollTo(0, 0);
  function noScroll() {
    window.scrollTo(0, 0);
  } // For Chrome, Firefox, IE and Opera

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

  const verify = () => {
    setisLoading(true);
    if (cookies.admin) {
      const url =
        "http://192.168.1.4/All%20Saints%20Backend/verify.php?mode=admin";

      const formData = new FormData();
      formData.append("admin_id", cookies.admin);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((res) => {
          setisLoading(false);
          console.log(res);
          if (res != "SUCCESS") {
            history.push("/admin/auth");
          }
        })
        .catch((err) => console.log(err));
    } else {
      history.push("/admin/auth");
    }
    setisLoading(false);
  };
  const Logout = () => {
    setisLoading(true);
    removeCookie("admin", { path: "/" });
    setisLoading(false);
    history.push("/admin/auth");
  };

  const fetchContact = () => {
    setisLoading(true);
    const url = "http://192.168.1.4/All%20Saints%20Backend/fetch_contact.php";

    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log(res)
        setcnt_fetch(res);
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const fetchPrayerRequest = () => {
    setisLoading(true);
    const url = "http://192.168.1.4/All%20Saints%20Backend/fetch_prayer.php";

    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((res) => {
        setisLoading(false);
        setpry_fetch(res);
      })
      .catch((err) => console.log(err));
  };

  const deleteFuc = (table, id) => {
    setisLoading(true);
    const isDel = window.confirm("Are you sure you want to delete?");
    if (isDel === false) {
      setisLoading(false);
      return;
    }
    const url = `http://192.168.1.4/All%20Saints%20Backend/delete.php?table=${table}`;

    const formData = new FormData();
    formData.append("id", id);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        fetchPrayerRequest();
        fetchContact();
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addEditor = () => {
    if (
      edt_lastname === "" ||
      edt_firstname === "" ||
      edt_email === "" ||
      edt_password === "" ||
      edt_cnfrPassword === ""
    ) {
      setmessagebox([true, "Please fill in all fields", "red"]);
      return;
    }

    if (edt_password.length < 6) {
      setmessagebox([true, "Passsword must be greater than six", "red"]);
      return;
    }

    if (edt_cnfrPassword != edt_password) {
      setmessagebox([true, "Password does not match", "red"]);
      return;
    }
    setisLoading(true);
    const url = `http://192.168.1.4/All%20Saints%20Backend/add_user.php?user=editor`;

    const formData = new FormData();
    formData.append("lastname", edt_lastname);
    formData.append("firstname", edt_firstname);
    formData.append("email", edt_email);
    formData.append("password", edt_password);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setisLoading(false);

        if (res === "SUCCESS") {
          setmessagebox([true, "Editor Added", "green"]);
        }
      })
      .catch((err) => console.log(err));
  };

  const addAdmin = () => {
    if (
      adm_lastname === "" ||
      adm_firstname === "" ||
      adm_email === "" ||
      adm_password === "" ||
      adm_cnfrPassword === ""
    ) {
      setmessagebox([true, "Please fill in all fields", "red"]);
      return;
    }

    if (adm_password.length < 6) {
      setmessagebox([true, "Passsword must be greater than six", "red"]);
      return;
    }

    if (adm_cnfrPassword != adm_password) {
      setmessagebox([true, "Password does not match", "red"]);
      return;
    }
    setisLoading(true);
    const url = `http://192.168.1.4/All%20Saints%20Backend/add_user.php?user=admin`;

    const formData = new FormData();
    formData.append("lastname", adm_lastname);
    formData.append("firstname", adm_firstname);
    formData.append("email", adm_email);
    formData.append("password", adm_password);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setisLoading(false);

        if (res === "SUCCESS") {
          setmessagebox([true, "Admin Added", "green"]);
        }
      })
      .catch((err) => console.log(err));
  };

  const fetchEditor = () => {
    setisLoading(true);
    const url = "http://192.168.1.4/All%20Saints%20Backend/user.php?qr=editor";

    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((res) => {
        setisLoading(false);
        setall_edt(res);
      })
      .catch((err) => console.log(err));
  };

  const fetchAdmin = () => {
    setisLoading(true);
    const url = "http://192.168.1.4/All%20Saints%20Backend/user.php?qr=admin";

    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((res) => {
        setisLoading(false);
        setall_adm(res);
      })
      .catch((err) => console.log(err));
  };

  const delUser = (table, id) => {
    setisLoading(true);
    const isDel = window.confirm("Are you sure you want to delete?");
    if (isDel === false) {
      setisLoading(false);
      return;
    }
    const url = `http://192.168.1.4/All%20Saints%20Backend/user.php?del=${table}`;

    const formData = new FormData();
    formData.append("id", id);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        fetchEditor();
        fetchAdmin();
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
        <img width="8%" src={require("../../../assets/loader1.gif")} alt="" />
      </div>
    );
  }
  return (
    <div className="Admin">
      <div className="nav">
        <div className="logo">
          <h1>Admin Portal</h1>
        </div>
        <div className="tabs">
          <div className="inner">
            <button
              onClick={() => {
                setcontact(true);
                setprayer_Req(false);
                setadd_admin(false);
                setadd_editor(false);
              }}
            >
              Contacts
            </button>
            <button
              onClick={() => {
                setcontact(false);
                setprayer_Req(true);
                setadd_admin(false);
                setadd_editor(false);
              }}
            >
              Prayer Requests
            </button>
            <button
              onClick={() => {
                setcontact(false);
                setprayer_Req(false);
                setadd_admin(true);
                setadd_editor(false);
              }}
            >
              Add Admin
            </button>

            <button
              onClick={() => {
                setcontact(false);
                setprayer_Req(false);
                setadd_admin(false);
                setadd_editor(true);
              }}
            >
              Add Editor
            </button>
            <button className="logout" onClick={Logout}>
              Logout
            </button>
          </div>
        </div>

        <div className="menu">
          <FontAwesomeIcon
            color="red"
            className="bars"
            style={{ cursor: "pointer" }}
            onClick={() => (sideBar ? setsideBar(false) : setsideBar(true))}
            icon={faBars}
          />
        </div>
      </div>

      {contact ? (
        <div className="cnt">
          <h1 className="title">Contact</h1>
          <div className="content">
            <h3>Contact Message Recieved</h3>
            {cnt_fetch.map((cnt_info) => {
              return (
                <div className="cnt_main">
                  <h1>
                    {cnt_info.last_name} {cnt_info.first_name}
                  </h1>
                  <p>{cnt_info.email}</p>
                  <p>{cnt_info.phone_no}</p>
                  <hr />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: cnt_info.message.replace("\n", `<br/>`),
                    }}
                    className="cnt_msg"
                  >
                    {/* {cnt_info.message} */}
                  </p>
                  <div className="bar">
                    <p>
                      {moment(cnt_info.created_at).format(
                        "Do MMMM YYYY, h:mm a"
                      )}
                    </p>
                    <div className="act_bt">
                      <button onClick={() => deleteFuc("contact", cnt_info.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      {prayer_Req ? (
        <div className="prayer_req">
          <h1 className="title">Prayer Request</h1>
          <div className="content">
            <h3>Prayer Requests Recieved</h3>
            {pry_fetch.map((pry_info) => {
              return (
                <div className="cnt_main">
                  <h1>
                    {pry_info.last_name != "-"
                      ? `${pry_info.last_name} ${pry_info.first_name}`
                      : "Anonymous"}
                  </h1>
                  <hr />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: pry_info.prayer.replace("\n", `<br/>`),
                    }}
                    className="cnt_msg"
                  ></p>
                  <div className="bar">
                    <p>
                      {moment(pry_info.created_at).format(
                        "Do MMMM YYYY, h:mm a"
                      )}
                    </p>
                    <div className="act_bt">
                      <button onClick={() => deleteFuc("prayer", pry_info.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      {add_admin ? (
        <div className="add_admin">
          <h1 className="title">Add Admin</h1>

          {messagebox[0] !== false ? (
            <div className="message-box" style={{ background: messagebox[2] }}>
              <p>{messagebox[1]}</p>
            </div>
          ) : (
            ""
          )}
          <div className="form">
            <div className="inpt-div">
              <h3>
                Full Name <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    onChange={(val) => setadm_lastname(val.target.value)}
                    type="text"
                    name="last-name"
                    id="last-name"
                  />
                  <small>Last Name</small>
                </div>

                <div className="inpt2">
                  <input
                    onChange={(val) => setadm_firstname(val.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                  />
                  <small>First Name</small>
                </div>
              </div>
            </div>

            <div className="inpt-div">
              <h3>
                Email <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    onChange={(val) => setadm_email(val.target.value)}
                    type="email"
                    name=""
                    id=""
                  />
                  <small>Enter email address</small>
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
                    onChange={(val) => setadm_password(val.target.value)}
                    type="password"
                  />
                  <small>Enter Password</small>
                </div>

                <div className="inpt2">
                  <input
                    onChange={(val) => setadm_cnfrPassword(val.target.value)}
                    type="password"
                  />
                  <small>Reapeat Password</small>
                </div>
              </div>
            </div>

            <div className="submit">
              <button onClick={addAdmin}>Add!</button>
            </div>
          </div>

          <div className="all_admin">
            <h1 className="title">All Admins</h1>

            <div className="content">
              {all_adm.map((adm_info) => {
                return (
                  <div className="main_content">
                    <h1>{`${adm_info.lastName} ${adm_info.firstName}`}</h1>
                    <p>{adm_info.email}</p>
                    <div className="delBut">
                      <button onClick={() => delUser("admins", adm_info.id)}>
                        Delete Admin
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {add_editor ? (
        <div className="add_editor">
          <h1 className="title">Add Editor</h1>
          {messagebox[0] !== false ? (
            <div className="message-box" style={{ background: messagebox[2] }}>
              <p>{messagebox[1]}</p>
            </div>
          ) : (
            ""
          )}
          <div className="form">
            <div className="inpt-div">
              <h3>
                Full Name <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    onChange={(val) => setedt_lastname(val.target.value)}
                    type="text"
                    name="last-name"
                    id="last-name"
                  />
                  <small>Last Name</small>
                </div>

                <div className="inpt2">
                  <input
                    onChange={(val) => setedt_firstname(val.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                  />
                  <small>First Name</small>
                </div>
              </div>
            </div>

            <div className="inpt-div">
              <h3>
                Email <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    onChange={(val) => setedt_email(val.target.value)}
                    type="email"
                  />
                  <small>Enter email address</small>
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
                    onChange={(val) => setedt_password(val.target.value)}
                    type="password"
                  />
                  <small>Enter Password</small>
                </div>

                <div className="inpt2">
                  <input
                    onChange={(val) => setedt_cnfrPassword(val.target.value)}
                    type="password"
                  />
                  <small>Reapeat Password</small>
                </div>
              </div>
            </div>

            <div className="submit">
              <button onClick={addEditor}>Add!</button>
            </div>
          </div>

          <div className="all_editor">
            <h1 className="title">All Editors</h1>

            <div className="content">
              {all_edt.map((edt_info) => {
                return (
                  <div className="main_content">
                    <h1>{`${edt_info.lastName} ${edt_info.firstName}`}</h1>
                    <p>{edt_info.email}</p>
                    <div className="delBut">
                      <button onClick={() => delUser("editors", edt_info.id)}>
                        Delete Editor
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        onClick={() => setsideBar(false)}
        className="overlay-side"
        style={{ display: sideBar ? "block" : "none" }}
      ></div>

      <div className="sidebar" style={sideBar ? open : close}>
        <div className="bar">
          <div className="img">
            <img src={require("../../../assets/NA.png")} alt="" />
          </div>
          <span onClick={() => setsideBar(false)}>
            <FontAwesomeIcon
              className="bars"
              style={{ cursor: "pointer" }}
              icon={faTimes}
            />
          </span>
        </div>
        <div className="sidebar-links">
          <div className="nv-lk">
            <button
              onClick={() => {
                setcontact(true);
                setprayer_Req(false);
                setadd_admin(false);
                setadd_editor(false);
                setsideBar(false);
              }}
            >
              Contacts
            </button>
          </div>

          <div className="nv-lk">
            <button
              onClick={() => {
                setcontact(false);
                setprayer_Req(true);
                setadd_admin(false);
                setadd_editor(false);
                setsideBar(false);
              }}
            >
              Prayer Requests
            </button>
          </div>

          <div className="nv-lk">
            <button
              onClick={() => {
                setcontact(false);
                setprayer_Req(false);
                setadd_admin(true);
                setadd_editor(false);
                setsideBar(false);
              }}
            >
              Add Admin
            </button>
          </div>

          <div className="nv-lk">
            <button
              onClick={() => {
                setcontact(false);
                setprayer_Req(false);
                setadd_admin(false);
                setadd_editor(true);
                setsideBar(false);
              }}
            >
              Add Editor
            </button>
          </div>

          <div className="nv-lk">
            <button
              style={{ backgroundColor: "red" }}
              className="logout"
              onClick={Logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
