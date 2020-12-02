import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faTrash,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import "./Live.css";
const Live = () => {
  const [bible_div, setbible_div] = useState(true);
  const [chat_div, setchat_div] = useState(false);
  const [live_service, setlive_service] = useState("");
  const [chat, setchat] = useState("");
  const [fetch_chat, setfetch_chat] = useState([]);
  const [user, setuser] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    fetchMisc();
    fetchChat();
    reFetchChats();
  }, []);
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
        setlive_service(res["live_service"]);
        // console.log(res['live_service'])
      })
      .catch((err) => console.log(err));
  };
  const sendChat = () => {
    if (localStorage.getItem("cht_user")) {
      setuser(localStorage.getItem("cht_user"));
    } else {
      let user_cht = prompt("Enter Username");
      if (user_cht === null) {
        return;
      } else {
        localStorage.setItem("cht_user", user_cht);
      }
    }
    const formData = new FormData();
    formData.append("chat", chat);
    formData.append("user", localStorage.getItem("cht_user"));
    const url = "http://localhost/All%20Saints%20Backend/chat.php?qr=upl";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log(res)
        fetchChat();
        setchat("");
      })
      .catch((err) => console.log(err));
  };

  const fetchChat = () => {
    const url = "http://localhost/All%20Saints%20Backend/chat.php?qr=dwl";
    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log(res)
        setfetch_chat(res);
      })
      .catch((err) => console.log(err));
  };

  const reFetchChats = () => {
    fetchChat();
    setTimeout(reFetchChats, 5000);
  };

  const deleteFuc = (table, id) => {
    const isDel = window.confirm("Are you sure you want to delete chat?");
    if (isDel === false) {
      return;
    }
    const url = `http://localhost/All%20Saints%20Backend/delete.php?table=${table}`;

    const formData = new FormData();
    formData.append("id", id);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        fetchChat();
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
    <div className="live">
      <div className="main">
        <div
          dangerouslySetInnerHTML={{ __html: live_service }}
          className="left"
        ></div>
        <div className="right">
          {bible_div ? (
            <div className="content">
              <iframe
                src="https://chop.bible.com/bible"
                height="100%"
                width="100%"
                frameborder="0"
              ></iframe>
            </div>
          ) : (
            ""
          )}

          {chat_div ? (
            <div className="content">
              <div className="chat">
                {fetch_chat.map((chat_ft) => {
                  return (
                    <div className="cht_msg">
                      <div className="lt">
                        <h5>{chat_ft.user}</h5>
                        <p>{chat_ft.message}</p>
                      </div>

                      <div className="rt">
                        {/* <div className="lk">
                          <span>1</span>
                          <FontAwesomeIcon
                            color="#2525c9"
                            className="snd"
                            style={{ cursor: "pointer" }}
                            //   onClick={() => deleteFuc("chat", chat_ft.id)}
                            icon={faThumbsUp}
                          />
                        </div> */}
                        <FontAwesomeIcon
                          color="red"
                          className="snd"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteFuc("chat", chat_ft.id)}
                          icon={faTrash}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="inpt">
                <input
                  value={chat}
                  onChange={(val) => setchat(val.target.value)}
                  placeholder="Chat"
                  type="text"
                  name=""
                  id="chat"
                  onKeyDown={(e) => (e.keyCode === 13 ? sendChat() : "")}
                />
                <span onClick={sendChat}>
                  <FontAwesomeIcon className="snd" icon={faPaperPlane} />
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="bar">
            <button
              style={{ fontWeight: bible_div ? "bold" : "inherit" }}
              onClick={() => {
                setbible_div(true);
                setchat_div(false);
              }}
            >
              Bible
            </button>
            <button
              style={{ fontWeight: chat_div ? "bold" : "inherit" }}
              onClick={() => {
                setbible_div(false);
                setchat_div(true);
              }}
            >
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
