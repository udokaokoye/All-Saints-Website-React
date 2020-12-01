import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Auth.css";
const Auth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["admin"]);
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error_email, seterror_email] = useState("");
  const [error_password, seterror_password] = useState("");

  useEffect(() => {
    // removeCookie("user", { path: "/" });
    verify();
  }, []);
  const verify = () => {
    if (cookies.admin) {
            history.push("/admin");
    } else {
      alert("NOO")
    }
  };
  const Login = () => {
    const formData = new FormData();

    if (email === "") {
      seterror_email("Please fill in this field");
    } else {
      seterror_email("");
    }

    if (password === "") {
      seterror_password("Please fill in this field");
      return;
    } else {
      seterror_password("");
    }

    formData.append("email", email);
    formData.append("password", password);

    const url = "http://localhost/All%20Saints%20Backend/auth.php?auth=admin";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        if (res[0] === "VALID") {
          var tomorrow = new Date();
          tomorrow.setDate(new Date().getDate() + 1);
          setCookie("admin", res[1], { path: "/" });
          history.push("/admin");
        } else if (res[0] === "NOT FOUND") {
          seterror_email("User not found.");
        } else if (res[0] === "INVALID PASSWORD") {
          seterror_password("Password not valid.");
        }
        console.log(res)
      })
      .catch((err) => console.log(err));
    // alert(`${email}, ${password}`);
  };
  return (
    <div>
      <div className="auth">
        <h3 className="top-txt">Welcome To The Admin Page</h3>
        <h5>Please fill in the form below to login</h5>
        <div className="form-login">
          <div className="form">
            <div className="name">
              <h3>
                Email Address <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    type="email"
                    onChange={(val) => setemail(val.target.value)}
                    name=""
                    id=""
                    style={{
                      borderColor: error_email ? "red" : "",
                      borderWidth: error_email ? 2 : "",
                    }}
                  />
                  <small>{error_email}</small>
                </div>
              </div>
            </div>

            <div className="password">
              <h3>
                Password <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <input
                    onChange={(val) => setpassword(val.target.value)}
                    type="password"
                    style={{
                      borderColor: error_password ? "red" : "",
                      borderWidth: error_password ? 2 : "",
                    }}
                  />
                  <small>{error_password}</small>
                </div>
              </div>
            </div>

            <center>
              <div className="submit">
                <button onClick={() => Login()}>Login</button>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
