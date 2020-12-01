import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import moment from "moment";
import "aos/dist/aos.css";
require("./Home.css");

const Home = () => {
  const [popup1, setpopup1] = useState(false);
  const [cntd, setcntd] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [navTrans, setnavTrans] = useState(false);
  const [showcase_text, setshowcase_text] = useState("initialState");
  const [misc, setmisc] = useState([]);
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setpopup1(true);

      setTimeout(() => {
        setpopup1(false);
      }, 10000);
    }, 8000);

    eventCount();
    fetch_showcase_title();
    fetchMisc();
    
  }, []);

  const eventCount = () => {
    // Set the date we're counting down to
    var countDownDate = new Date("Sunday, 29 November 2020 18:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      setcntd({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });

      // console.log(cntd);

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        setcntd({});
      }
    }, 1000);
  };

  const fetch_showcase_title = () => {
    const formData = new FormData();

    const url =
      "http://localhost/All%20Saints%20Backend/random.php?qr=showcase_text";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        // setshowcase_text(res[0]);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const fetchMisc = () => {
    const formData = new FormData();

    const url = "http://localhost/All%20Saints%20Backend/random.php?qr=all";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        setmisc(res);
      })
      .catch((err) => console.log(err));
  };


  window.onscroll = () => {
    if (window.scrollY > 10) {
      setnavTrans(true);
    }

    if (window.scrollY < 1) {
      setnavTrans(false);
    }
  };

  return (
    <React.Fragment>
      <section className="top">
        <div className="overlay"></div>
        <header className={`home-header ${navTrans ? "trans" : ""}`}>
          <div className="home-logo">
            <div className="img-logo">
              <img src={require("../../assets/Chaplain.jpg")} alt="" />
            </div>
            
            <h1>Cathedral</h1>
          </div>
          <div className="home-links">
            <div className="home-links-inner">
              <NavLink className="home-link-default" to="/">
                Home
              </NavLink>
              <NavLink className="home-link-default" to="/events">
                Events
              </NavLink>
              <NavLink className="home-link-default" to="/sermon">
                Sermon
              </NavLink>
              <NavLink className="home-link-default" to="/dss">
                DSS
              </NavLink>
              <NavLink className="home-link-default" to="/contact">
                Contact
              </NavLink>
            </div>
          </div>
        </header>

        <section className="showcase">
          <h1 dangerouslySetInnerHTML={{__html: (misc["showcase_text"] + "")
        .replace(
          "\n",
          `<br/>`
        )}} data-aos="fade" data-aos-duration="1500">
             {/* THE MIRACLE <br/> ARENA */}
            {/* {misc["showcase_text"]} */}
          </h1>
          {/* <h1 data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
            ARENA
          </h1> */}
          <div className="qt">
            <span
              data-aos="zoom-in"
              data-aos-delay="1000"
              style={{ opacity: 0.6 }}
            >
              LOVE.
            </span>{" "}
            <span
              data-aos="zoom-in"
              data-aos-delay="1300"
              style={{ opacity: 0.6 }}
            >
              GROW.
            </span>{" "}
            <span
              data-aos="zoom-in"
              data-aos-delay="1500"
              style={{ opacity: 0.6 }}
            >
              SERVE.
            </span>{" "}
            <span
              data-aos="zoom-in"
              data-aos-delay="1700"
              style={{ opacity: 0.6 }}
            >
              GO.
            </span>
          </div>

          <NavLink style={{ zIndex: 1000 }} to="/sermon">
            <button
              data-aos="zoom-in"
              data-aos-delay="1800"
              data-aos-duration="1200"
              className="serm-watch"
            >
              Watch Sermon
            </button>
          </NavLink>
        </section>
      </section>

      <button
        className="top-btn"
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>

      <section className="New-Here-Section">
        <div className="new-here">
          <div data-aos="fade-left" className="bar">
            <span>WELCOME TO THE CATHEDRAL</span>
          </div>

          <div className="content">
            <h3>New Here?</h3>

            <NavLink to="/contact">
              <button>Contact Us</button>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="box1">
        <div data-aos="fade-right" className="inner-1">
          <div className="overlay-box"></div>
          <h1>Worship</h1>
          <p>Worsip on Sundays</p>
          <p>EMHCS: 7:30am</p>
          <span>&</span>
          <p>Main Service: 10:00 am</p>
          <Link style={{ zIndex: 1000 }} to="/sermon">
            <button>Watch Prev Sermons</button>
          </Link>
        </div>
        <div data-aos="zoom-in" className="inner-2">
          <div className="overlay-box"></div>
          <h1>Events</h1>
          <p>Catch up with all the upcoming events</p>
          <p>at the cathedral</p>

          <Link style={{ zIndex: 1000 }} to="/events">
            <button>View Events</button>
          </Link>
        </div>
        <div data-aos="fade-left" className="inner-3">
          <div className="overlay-box"></div>
          <h1>Connect</h1>
          <p>Need prayer, counseling, or have questions? We want to help.</p>
          <Link style={{ zIndex: 1000 }} to="/contact">
            <button>Get Help</button>
          </Link>
        </div>
      </section>

      <section className="social">
        <h1 dangerouslySetInnerHTML={{__html: (misc["banner_txt"] + "")
        .replace(
          "\n",
          `<br/>`
        )}} data-aos="fade" data-aos-duration="1000">
          {/* Several Ways to connect With Us. */}
          {/* {misc['banner_txt']} */}
        </h1>
        <h1 data-aos="fade" data-aos-duration="1000">
          {/* Choose One, Choose All. */}
        </h1>
        <div className="soc-icons">
          <a
            data-aos="zoom-in"
            data-aos-delay="400"
            href="http://"
            target="_blank"
            title="Facebook"
          >
            <FontAwesomeIcon className="fb" color="#fff" icon={faFacebook} />
          </a>

          <a
            data-aos="zoom-in"
            data-aos-delay="500"
            href="http://"
            target="_blank"
            title="YouTube"
          >
            <FontAwesomeIcon className="yt" color="#fff" icon={faYoutube} />
          </a>

          <a
            data-aos="zoom-in"
            data-aos-delay="600"
            href="http://"
            target="_blank"
            title="Instagram"
          >
            <FontAwesomeIcon className="ig" color="#fff" icon={faInstagram} />
          </a>
        </div>
      </section>

      <section className="live">
        <div className="img">
          <img
            src={require("../../assets/live2.png")}
            width="100%"
            height="100%"
            alt="chap"
          />
        </div>
        <div className="text">
          <h1 dangerouslySetInnerHTML={{__html: (misc["live_txt"] + "")
        .replace(
          "\n",
          `<br/>`
        )}}></h1>
        </div>
      </section>

      <section className="coming-event">
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-offset="250"
          className="bar"
        >
          <h1>Coming Events</h1>
        </div>

        <div className="content">
          <div className="overlay">
            <h1 className="evt-name">EMHC Service</h1>

            <h1 className="evt-date">Date: 14-11-2020 - Time: 7:30am</h1>
          </div>
        </div>
        <div className="starts-in">
          <div className="overlay"></div>
          <span className="evt-str">Event starts in</span>
          <div className="countdw">
            {cntd.days !== 0 ? (
              <span className="d">
                <span>{cntd.days}</span> <span>Days</span>
              </span>
            ) : (
              ""
            )}
            <span className="hr">
              <span>{cntd.hours}</span> <span>Hours</span>
            </span>
            <span className="mi">
              <span>{cntd.minutes}</span> <span>Minutes</span>
            </span>
            <span className="se">
              <span>{cntd.seconds}</span> <span>Seconds</span>
            </span>
          </div>
        </div>
      </section>

      <section
        className="popup1"
        id="popup1"
        style={{
          transition: "all 0.5s ease-in-out",
          height: popup1 ? "40vh" : "0px",
        }}
      >
        <div className="bar">
          <h1>Verse Of The Day</h1>
          <span
            onClick={() => {
              setpopup1(false);
            }}
          >
            X
          </span>
        </div>
        <div className="content">
          <p className="text">
            For I am convinced that neither death nor life, neither angels nor
            demons, neither the present nor the future, nor any powers, neither
            height nor depth, nor anything else in all creation, will be able to
            separate us from the love of God that is in Christ Jesus our Lord.
          </p>
          <p className="scripture">~Romans 8:38-39</p>
        </div>
      </section>

      <section className="footer">
        <p>
          <FontAwesomeIcon icon={faCopyright} /> 2020 Copyright - Cathedral
        </p>
      </section>
    </React.Fragment>
  );
};

export default Home;
