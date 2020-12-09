import React, { useEffect, useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [cnt_firstName, setcnt_firstName] = useState("");
  const [pry_firstName, setpry_firstName] = useState();
  const [cnt_lastName, setcnt_lastName] = useState("");
  const [pry_lastName, setpry_lastName] = useState();
  const [prayer, setprayer] = useState("");
  const [cnt_phone, setcnt_phone] = useState("");
  const [cnt_email, setcnt_email] = useState("");
  const [cnt_message, setcnt_message] = useState("");
  const [messagebox, setmessagebox] = useState([false, "", "", ""]);
  const [anny, setanny] = useState(false);
  const [misc_fetch, setmisc_fetch] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    fetchMisc();
    function noScroll() {
      window.scrollTo(0, 0);
    }
    window.removeEventListener('scroll', noScroll);
  }, []);

  const submitContact = () => {
    if (
      cnt_firstName === "" ||
      cnt_lastName === "" ||
      cnt_phone === "" ||
      cnt_message === ""
    ) {
      setmessagebox([true, "Please fill in all fields", "red"]);
      document.getElementById("cnt").scrollIntoView();
      return;
    }
    const formData = new FormData();

    formData.append("lastName", cnt_lastName);
    formData.append("firstName", cnt_firstName);
    formData.append("phone", cnt_phone);
    formData.append("email", cnt_email);
    formData.append("message", cnt_message);
    setisLoading(true);
    const url = "http://localhost/All%20Saints%20Backend/contact.php";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setisLoading(false);
        if (res === "SUCCESS") {
          setmessagebox([true, "Message sent ", " rgba(0, 126, 0, 0.788)"]);
          document.getElementById("cnt").scrollIntoView();
          return;
        }
      })
      .catch((err) => console.log(err));
  };

  const submitPrayer = () => {
    const formData = new FormData();
    if (anny === false) {
      if (pry_firstName === "" || pry_lastName === "" || prayer === "") {
        setmessagebox([false, "Please fill in all fields", "red", "pry"]);
        document.getElementById("pry").scrollIntoView();
        return;
      }
      formData.append("lastName", pry_lastName);
      formData.append("firstName", pry_firstName);
      // alert('False')
      // return;
    }

    if (anny === true) {
      formData.append("lastName", "-");
      formData.append("firstName", "-");
      if (prayer === "") {
        setmessagebox([false, "Please fill in all fields", "red", "pry"]);
        document.getElementById("pry").scrollIntoView();
        return;
      }
      // alert('True')
      // return;
    }

    formData.append("prayer", prayer);
    setisLoading(true);
    const url = "http://localhost/All%20Saints%20Backend/prayer.php";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setisLoading(false);
        if (res === "SUCCESS") {
          setmessagebox([
            false,
            "Message sent ",
            " rgba(0, 126, 0, 0.788)",
            "pry",
          ]);
          document.getElementById("pry").scrollIntoView();
          // setpry_lastName("");
          // setpry_firstName("");
          // setprayer("");
          return;
        }
      })
      .catch((err) => console.log(err));
  };

  const fetchMisc = () => {
    const formData = new FormData();
    setisLoading(true);
    const url = "http://localhost/All%20Saints%20Backend/random.php?qr=all";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setisLoading(false);
        setmisc_fetch(res);
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
      <div className="contact">
        <div className="cnt-tp">
          <h1>Contact Us</h1>
        </div>

        <div className="cnt-inf">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123830851734!2d3.3616603149477546!3d6.506005325171012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8de71d094337%3A0x807d02323b8eab39!2sAll%20Saints&#39;%20(AHQ)%20Cathedral%2C%20Abalti%20Barracks!5e0!3m2!1sen!2sng!4v1605909531781!5m2!1sen!2sng"
              width="100%"
              height="100%"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="address">
            <h1>Contact All Saint's</h1>

            <p className="sml-txt">
              Thank you for your intrest in The Gathering. Feel free to contact
              us via the form below or the contact information below
            </p>
            <span id="cnt">Address:</span>
            <p>Abalti Barracks P.O BOX: 363 Surulere, Lagos.</p>
            <span>Phone:</span>
            <p>{misc_fetch["cnt_phone"]}</p>
            <span>Email:</span>
            <p>{misc_fetch["cnt_email"]}</p>
          </div>
        </div>

        <div className="contact-form">
          <h1 className="titl">Contact Form</h1>
          <hr />
          {messagebox[0] !== false ? (
            <div className="message-box" style={{ background: messagebox[2] }}>
              <p>{messagebox[1]}</p>
            </div>
          ) : (
            ""
          )}
          <div className="form">
            <div className="name">
              <h3>
                Full Name <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    onChange={(val) => setcnt_lastName(val.target.value)}
                    type="text"
                    name="last-name"
                    id="last-name"
                  />
                  <small>Last Name</small>
                </div>

                <div className="inpt2">
                  <input
                    onChange={(val) => setcnt_firstName(val.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                  />
                  <small>First Name</small>
                </div>
              </div>
            </div>

            <div className="phone">
              <h3>
                Phone Number <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    onChange={(val) => setcnt_phone(val.target.value)}
                    type="text"
                    name="phone-number"
                    id="phone-number"
                  />
                  <small></small>
                </div>
              </div>
            </div>

            <div className="email">
              <h3>Email Address </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    onChange={(val) => setcnt_email(val.target.value)}
                    type="email"
                    name="email"
                    id="email"
                  />
                  <small>Skip if you dont have an email</small>
                </div>
              </div>
            </div>

            <div className="message">
              <h3>Message </h3>
              <div className="input">
                <div className="inpt1">
                  <textarea
                    onChange={(val) => setcnt_message(val.target.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <small id="pry">Drop a message</small>
                </div>
              </div>
            </div>

            <div className="submit">
              <button onClick={submitContact}>Submit</button>
            </div>
          </div>
        </div>

        <div className="prayer-request" id="prayer-request">
          <h1 className="titl">Prayer Request</h1>
          <hr />
          {messagebox[3] === "pry" ? (
            <div className="message-box" style={{ background: messagebox[2] }}>
              <p>{messagebox[1]}</p>
            </div>
          ) : (
            ""
          )}
          <div className="form">
            {anny == false ? (
              <div className="name">
                <h3>
                  Full Name <span>*</span>
                </h3>
                <div className="input">
                  <div className="inpt1">
                    <input
                      value={pry_lastName}
                      onChange={(val) => setpry_lastName(val.target.value)}
                      type="text"
                      name="last-name"
                      id="last-name"
                    />
                    <small>Last Name</small>
                  </div>

                  <div className="inpt2">
                    <input
                      value={pry_firstName}
                      onChange={(val) => setpry_firstName(val.target.value)}
                      type="text"
                      name="first-name"
                      id="first-name"
                    />
                    <small>First Name</small>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <input
              onChange={() => (anny ? setanny(false) : setanny(true))}
              type="checkbox"
              name=""
              id=""
            />{" "}
            <small>Annonymous</small>
            <div className="message">
              <h3>Prayer Request </h3>
              <div className="input">
                <div className="inpt1">
                  <textarea
                    value={prayer}
                    onChange={(val) => setprayer(val.target.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <small>Drop a Prayer Request</small>
                </div>
              </div>
            </div>
            <div className="send">
              <button onClick={submitPrayer}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
