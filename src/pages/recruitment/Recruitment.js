import React from "react";
import "./recruitment.css";
// import poster from "../../assest/frame87.png";
import { GoToHomePageLinkLogo, HrmsFooterComp } from "../../components";
export default function RecruitmentComponent() {
  return (
    <div className="homePage">
      <div className="homePage--grid    recruitment">
        <img alt="recruitment-poster" src="/images/re.png" />

        <div className="homePage--overlay recruitment">
          <div id="intro" className="intro--index not">
            <div className="grid   hero-parent  ">
              <div className="grid-company-logo">
                <GoToHomePageLinkLogo />
              </div>
              <div className="intro-heading half recruitment">
                <p>Recruitment</p>
                <h1 id="heading">
                  An all-in-one hiring tool designed to make sourcing, managing
                  and onboarding your next hire a breeze.
                </h1>
              </div>
            </div>

            <div className="job-requistion-section requistion   similar-grid">
              <div className="job-left-section">
                <h2>Job Requisition</h2>
                <p>
                  The job requisition is either send to the direct supervisor of
                  the teams manager or to HR, depending on who holds the
                  responsibility. Once approved the job requirement can be
                  uploaded to the eHRMS portal.
                </p>
              </div>
              <div className="job-right-section">
                <img
                  src="/images/frame10.svg"
                  alt="job-requistion-section-poster"
                />
              </div>
            </div>
            <div className="candidate-sourcing-section similar-grid">
              <div className="job-left-section">
                <h2>Candidate Sourcing</h2>
                <p>
                  A proactive search for potential hires to fill current and
                  future job openings. The Job Requisition is uploaded to job
                  posting websites of your choice.
                </p>
              </div>
            </div>
            {/* <div className="applicant-tracking-section"> */}
            <div className="job-requistion-section similar-grid ">
              <div className="job-right-section">
                <img
                  src="/images/applicant.svg"
                  alt="job-requistion-section-poster"
                />
              </div>
              <div className="job-left-section">
                <h2>Applicant Tracking </h2>
                <p>
                  The Applicant Tracking module allows you to track each
                  candidate through the recruitment process. This includes
                  providing an easy way to schedule interviews using integrated
                  calendars on mobile, or desktop.
                </p>
              </div>
            </div>
            {/* </div> */}
            <div className="onboarding-section job-requistion-section  similar-grid">
              <div className="job-left-section">
                <h2>Onboarding </h2>
                <p>
                  Our Onboarding solution is designed to make onboarding easier
                  for everyone. eHRMS provides them with guidance, tools, and
                  information they need to feel welcome and become productive
                  members of the team.
                </p>
              </div>
              <div className="job-right-section">
                <img
                  src="/images/onboarding.svg"
                  alt="job-requistion-section-poster"
                />
              </div>
            </div>
            <HrmsFooterComp />
          </div>
        </div>
      </div>
    </div>
  );
}
