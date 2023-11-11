import React from "react";
import "./Footer.css";

import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";


function Footer() {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="Github" onClick={() => window.open('https://github.com/sydhrs', '_blank')}/>
          <img src={LinkedIn} alt="Linked in" onClick={() => window.open('https://www.linkedin.com/in/syed-haris-77b366106/', '_blank')}/>
       

        </div>

        <div className="logo-f">
          <img src={Logo} alt="fit club logo" />
        </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
}

export default Footer;
