import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./hrms-footer.css";
export default function HrmsFotter() {
  const { selectedLanguage } = useSelector((state) => state);
  const mainLinks = [
    { title: "Home", link: "/" },
    { title: "Professional Services", link: "/professional-services" },
    { title: "About & Vision", link: "/about-&-vision" },
    { title: "Contact", link: "/contact" },
    { title: "Data Securit & Privacy", link: "data-security-&-privacy" }
  ];
  const hrmSubMenuList = [
    { title: "HRMS", link: "/hrms" },
    { title: "Payroll", link: "/payroll" },
    { title: "Recruitment", link: "/recruitment" },
    { title: "Performance Management", link: "/performance-management" },
    { title: "Facility Management", link: "/facility-management" },
    { title: "HANDYHR", link: "/handy-hr" },
    { title: "Offboarding", link: "/offboarding" }
  ];
  const socialIconsList = [
    { title: "facebook", link: "https://www.facebook.com/megasoftsolution" },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/company/3510791/admin/"
    },
    {
      title: "instagram",
      link: "https://www.instagram.com/megasoftsolutions/"
    },
    { title: "medium", link: "https://megasoftsol.medium.com" },
    { title: "twitter", link: "https://twitter.com/MegasoftSol" },
    { title: "chat", link: "" }
  ];
  return (
    <div className="hrms-footer similar-grid">
      <div className="hrms-footer-two-column-flex">
        <div className="hrms-footer-inner">
          <div className="footer-first-column">
            <Link to={`/${selectedLanguage}/`}>
              <img src="/images/footer-logo.png" alt="footer-MS-logo" />
            </Link>
            <p>
              subscribe to our newsletter for updates on compliance, payroll
              management and other industry insights
            </p>
            <div className="footer-first-column-subscribe-wrapper">
              <input type="email" placeholder="EMAIl Address" />
              <button>Susbcribe</button>
            </div>
          </div>
          <div className="footer-second-column">
            <Link to={`/${selectedLanguage}/`}>
              <img src="/images/footer-logo.png" alt="footer-MS-logo" />
            </Link>
            <div className="footer-second-column-inner-flex">
              <div className="footer-second-column-inner-half">
                <ul>
                  {mainLinks.map((link, i) => (
                    <li key={i}>
                      <Link to={`/${selectedLanguage}${link.link}`}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-second-column-inner-half">
                <ul>
                  {hrmSubMenuList.map((link, i) => (
                    <li key={i}>
                      <Link to={`/${selectedLanguage}${link.link}`}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-third-column">
          {socialIconsList.map((icon, i) => (
            <a
              id={`${icon.title}-id`}
              target="_blank"
              rel="noreferrer"
              href={icon.link}
              key={i}
              className="footer-third-column-social-icon-box"
            >
              <img
                src={`/images/${icon.title}.png`}
                alt={`hrms-${icon.title}-logo`}
              />
              {i === socialIconsList.length - 1 && <span>Let's Chat</span>}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <div className="footer-bootom-box">
          <span>Corporate Office:</span>
          <address>
            475, Udyog Vihar Phase V, Gurgaon, Haryana- 221292 India
          </address>
        </div>
        <div className="footer-bootom-box">
          <p>Copyright © 2021 Megasoft Solutions India Private Limited.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
