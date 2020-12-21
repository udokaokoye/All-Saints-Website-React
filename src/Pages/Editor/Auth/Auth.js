import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Auth.css";
const Auth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error_email, seterror_email] = useState("");
  const [error_password, seterror_password] = useState("");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    // removeCookie("user", { path: "/" });
    verify();
  }, []);
  const verify = () => {
    setisLoading(true);
    if (cookies.user) {
      const url =
        "http://192.168.1.112/All%20Saints%20Backend/verify.php?mode=already_logged";

      const formData = new FormData();
      formData.append("user_id", cookies.user);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((res) => {
          setisLoading(false);
          if (res === "SUCCESS") {
            history.push("/editor");
          }
        })
        .catch((err) => console.log(err));
    }
    setisLoading(false);
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
    setisLoading(true);
    const url = "http://192.168.1.112/All%20Saints%20Backend/auth.php?auth=editor";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setisLoading(false);
        if (res[0] === "VALID") {
          var tomorrow = new Date();
          tomorrow.setDate(new Date().getDate() + 1);
          setCookie("user", res[1], { path: "/" });
          history.push("/editor");
        } else if (res[0] === "NOT FOUND") {
          seterror_email("User not found.");
        } else if (res[0] === "INVALID PASSWORD") {
          seterror_password("Password not valid.");
        }
        // console.log(res)
      })
      .catch((err) => console.log(err));
    // alert(`${email}, ${password}`);
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
    <div>
      <div className="auth">
        <h3 className="top-txt">Welcome To The Editors Page</h3>
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
