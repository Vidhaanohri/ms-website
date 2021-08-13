import React from "react";
import "./content.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function ContentBox() {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".appear", {
      scrollTrigger: {
        trigger: ".appear",
        start: "top 80%"
      },
      opacity: 1,
      duration: 0.2,
      y: -50
    });
    gsap.to(".animate", {
      scrollTrigger: {
        trigger: ".animate",
        start: "top 70%"
      },
      opacity: 1,
      transform: "translate(0px ,0px)"
    });
    gsap.to(".text-columndelay", {
      scrollTrigger: {
        trigger: ".text-columndelay",
        start: "top 80%"
      },
      opacity: 1,
      transform: "translate(0px ,0px)"
    });
  }, []);

  return (
    <section className="content-service" id="content">
      <div className="grid">
        <div className="row">
          <div className="col lg-10-12 lg-push-left-1-12">
            <div className="content__container js-scroll-target">
              <div className="content__intro appear ">
                <h2>
                  A fully customised comprehensive technological infrastructure
                  with end-to-end service support for superior business
                  management.
                </h2>
              </div>
              <div className="text-columns text-columns--service">
                <div className="text-column  animate">
                  <h3 className="appear">
                    <span className="bubble"></span>HRMS
                  </h3>
                  <p className="appear">
                    Automate your HR processes and manage your human capital
                    from virtual hiring to exit. Reach your HR through
                    technology from anywhere 24/7.
                  </p>
                </div>
                <div className="text-column animate">
                  <h3 className="appear">
                    <span className="bubble"></span>Payroll
                  </h3>
                  <p className="appear">
                    Our end-to-end payroll services keep more than 10 million
                    satisfied employees per month across the world, by providing
                    error-free salary cheques on or before time
                  </p>
                </div>
                <div className="text-column animate">
                  <h3 className="appear">
                    <span className="bubble"></span>Compliance
                  </h3>
                  <p className="appear">
                    One-stop solution for all HR compliance related needs
                    keeping our clients compliant and away from the financial
                    losses as well as legal liabilities.
                  </p>
                </div>
                <div className="text-column  text-columndelay ">
                  <h3 className="appear">
                    <span className="bubble"></span>Benefits Administrations
                  </h3>
                  <p className="appear">
                    Track benefits including health, insurance, leaves,
                    vacation, expenses, lodging online or offline quickly and
                    easily.
                  </p>
                </div>
                <div className="text-column  text-columndelay ">
                  <h3 className="appear">
                    <span className="bubble"></span>Finance & Accounting
                  </h3>
                  <p className="appear">
                    Megasoft Solutions offer smart solutions for finance and
                    accounting processes. Our team will ensure that your
                    business runs smoothly, improving effeciency and reducing
                    costs.
                  </p>
                </div>
                <div className="text-column text-columndelay">
                  <h3 className="appear">
                    <span className="bubble"></span>Taxation
                  </h3>
                  <p className="appear">
                    Cost effective and efficient solutions for direct and
                    indirect taxation. Our expertise in this area is supported
                    by a thorough understanding of business tasks that allow us
                    to design tailor made software solutions for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
