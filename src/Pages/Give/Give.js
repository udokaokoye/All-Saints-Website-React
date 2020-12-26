import React, { useState, useEffect } from "react";
import "./Give.css";
import moment from "moment";
import { PaystackButton } from "react-paystack";
const Give = () => {
  const [fullname, setfullname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [giving_for, setgiving_for] = useState("");
  const [amount, setamount] = useState("");
  const [other, setother] = useState(false);
  const [other_txt, setother_txt] = useState("");
  const [messagebox, setmessagebox] = useState([false]);
  // const [refr, setrefr] = useState(''+Math.floor((Math.random() * 1000000000) + 1));

  useEffect(() => {}, []);
  const paystackProps = {
    email: email,
    amount: amount * 100,
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    metadata: {
      name: fullname,
      phone: phone,
    },

    publicKey: "pk_test_30ee7303e0935e6c856041274688df58f40bded8",

    text: "Pay Now",

    onSuccess: () => {
      const url = `http://192.168.1.4/All%20Saints%20Backend/payment.php`;

      const formData = new FormData();
      formData.append("ref_id", paystackProps.reference);
      formData.append("fullname", fullname);
      formData.append("email", email);
      formData.append("phone", phone);
      if (giving_for === "Other") {
        formData.append("giving_for", other_txt);
      } else {
        formData.append("giving_for", giving_for);
      }
      formData.append("amount", amount);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((res) => {
          setmessagebox([
            true,
            `Payment Successful \n Ref: ${paystackProps.reference}`,
            " rgba(0, 126, 0, 0.788)",
          ]);
          let rs = "";
          if (giving_for === "Other") {
            rs = other_txt;
          } else {
            rs = giving_for;
          }
          var messagebird = require("messagebird")("6pOzARk2ZWgv8qNyioGC4qbt8");
          const msg = `Payment Recived From \n Name: ${fullname} \n Email: ${email} \n Phone: ${phone} \n Amount: #${amount} \n Reason: ${rs} \n Date ${moment().format(
            "MMMM Do YYYY, h:mm a"
          )}`;
          var params = {
            originator: "All Saints",
            recipients: ["+2349052529159"],
            body: msg,
          };

          messagebird.messages.create(params, function (err, response) {
            if (err) {
              return console.log(err);
            }
            console.log(response);
          });
        })
        .catch((err) => console.log(err));
    },

    onClose: () => {
      setmessagebox([true, "Payment Failed ", "red"]);
    },
  };

  // if (other_txt === 'Other') {
  //   setother(true)
  // }
  return (
    <div className="give">
      <div className="showcase-give">
        <div className="inner">
          <h1>GIVING</h1>
          <p>WE ENCOURAGE GIVING AS AN ACT OF WORSHIP</p>
        </div>
      </div>
      <div className="qt">
        <span>"</span> Then Isaac sowed in that land, and reaped in the <br />{" "}
        same year a hundredfold; and the Lord blessed him. <span>"</span>
        <p>-Genesis 26: 12</p>
      </div>

      <div className="give-form">
        <h1>Give</h1>
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
                  onChange={(val) => setfullname(val.target.value)}
                  type="text"
                  name="last-name"
                  id="last-name"
                />
                <small></small>
              </div>
            </div>
          </div>

          <div className="phone">
            <h3>
              Phone <span>*</span>
            </h3>
            <div className="input">
              <div className="inpt1">
                <input
                  onChange={(val) => setphone(val.target.value)}
                  type="text"
                  name="last-name"
                  id="last-name"
                />
                <small></small>
              </div>
            </div>
          </div>

          <div className="email">
            <h3>
              Email <span>*</span>
            </h3>
            <div className="input">
              <div className="inpt1">
                <input
                  onChange={(val) => setemail(val.target.value)}
                  type="email"
                  name="last-name"
                  id="last-name"
                />
                <small></small>
              </div>
            </div>
          </div>

          <div className="phone">
            <h3>
              Giving For <span>*</span>
            </h3>
            <div className="input">
              <div className="inpt1">
                <select
                  onChange={(val) => setgiving_for(val.target.value)}
                  name=""
                  id=""
                >
                  <option value="">Choose a purpose</option>
                  <option value="Tithe">Tithe</option>
                  <option value="General Thanksgiving">
                    General Thanksgiving
                  </option>
                  <option value="Other">Other...</option>
                </select>
                <small></small>
              </div>
            </div>
          </div>

          {giving_for === "Other" ? (
            <div className="phone">
              <h3>
                Other <span>*</span>
              </h3>
              <div className="input">
                <div className="inpt1">
                  <textarea
                    onChange={(val) => setother_txt(val.target.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <small>Enter Reason</small>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="email">
            <h3>
              Amount <span>*</span>
            </h3>
            <div className="input">
              <div className="inpt1">
                <input
                  onChange={(val) => setamount(val.target.value)}
                  type="text"
                  name="last-name"
                  id="last-name"
                />
                <small>Enter amount</small>
              </div>
            </div>
          </div>

          <PaystackButton className="paystack-button" {...paystackProps} />
        </div>
      </div>
    </div>
  );
};

export default Give;
