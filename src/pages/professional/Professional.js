import React from "react";
import "./professional.css";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
export default function ProfessionalComponent() {
  return (
    <div className="homePage">
      <div className="homePage--grid professional">
        <img alt="recruitment-poster" src="/images/professional.png" />
        <div className="homePage--overlay recruitment">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half hrms   ">
                <p>Professional Services</p>
                <h1 id="heading">
                  We offer professional services that can span multiple
                  industries, including finance, accounting, legal, marketing
                  and virtually every type of consultancy you can think of.
                </h1>
              </div>
            </div>
          </div>
          <div className="similar-grid">
            <div className="professional-wrapper">
              <div className="professional-content">
                <h3>Finance & Accounting</h3>
                <p>
                  Systematize your finance and accounting management processes
                  across different businesses as well as locations with
                  Megasoft’s Finance and Accounting (F&A) Solutions which
                  include but are not limited to SSC (Shared Service Centre),
                  Accounts Payables, Accounts Receivables, and Fixed Assets
                  Management.
                </p>
              </div>
              <div className="professional-content">
                <h3>Compliance</h3>
                <p>
                  Receive steady and continuous compliance support and proper
                  guidance to remain complaint and updated with the changes in
                  Payroll Related Compliances Management, Compliances for any
                  office registered under Shops or Commercial Establishments,
                  and Compliances for Factory & Plant armored by an empaneled
                  legal pool, assistance in inspections & audits, reply to
                  notices, representation in tribunal and courts etc.
                </p>
              </div>
            </div>
            <div className="professional-wrapper">
              <div className="professional-content">
                <h3>Benefits Administration</h3>
                <p>
                  Considering that there are numerous challenges pension
                  administrators face, a single point comprehensive solution,
                  which perfectly manages the complete gamut of activities
                  related to employee retirement benefits like PF Management,
                  Gratuity, Superannuation, etc. is offered by highly skilled
                  and experienced professionals.
                </p>
              </div>
              <div className="professional-content">
                <h3>Taxation</h3>
                <p>
                  We specialize in direct and indirect taxation and offer our
                  services through a network of Chartered Accountants and
                  Lawyers. We assist you with efficient solutions within the
                  ambit of taxation laws and keep you up to date with the latest
                  changes in tax laws, as and when they arise.
                </p>
              </div>
            </div>
          </div>
          <div className="professional-wrapper-contact similar-grid">
            <h2>Contact Us</h2>
            <div className="professional-form">
              <div className="professional-form-flex">
                <div className="professional-form-half">
                  <input placeholder="Name" />
                </div>
                <div className="professional-form-half">
                  <input placeholder="Phone Number " />
                </div>
              </div>
              <div className="professional-form-flex">
                <input placeholder="Email" />
              </div>
              <div className="professional-form-flex">
                <div className="professional-form-half">
                  <input placeholder="Company Name" />
                </div>
                <div className="professional-form-half">
                  <input placeholder="Company Size" />
                </div>
              </div>
              <button>Send</button>
            </div>
          </div>
          <HrmsFooterComp />
        </div>
      </div>
    </div>
  );
}
