import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faAngleUp, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <div>
            <section className="footer-ft">
        <p>
          <FontAwesomeIcon icon={faCopyright} /> 2020 Copyright - Cathedral
        </p>
      </section>
        </div>
    )
}

export default Footer
