import React from "react";
import "./services.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function ServicesContiner() {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#cta", {
      scrollTrigger: {
        trigger: "#cta",
        start: "top center"
      },
      padding: "100px 0px 250px"
    });
  }, []);
  return (
    <section id="cta" className="cta-service   translate ">
      <div className="grid">
        {/* <div className="row row--ver-middle"> */}
        <div className="row service  ">
          <div className="lg-push-left-1-12 ">
            <div className="flex">
              <div className="cta--left">
                <h2>
                  Feel free to get <br />
                  in touch with us
                </h2>
              </div>
              <div className="cta-seprator point"></div>
              <div className="cta--right">
                <div className="center-text">
                  <div className="p-text">
                    <p>
                      Our team is here to help you with any questions you have.
                    </p>
                  </div>
                  <div className="cta-list">
                    <ul>
                      <li>
                        <label>E-mail: </label>
                        <a href="mailto:info@neosoft.ch">info@neosoft.ch</a>
                      </li>
                      <li>
                        <label>Phone: </label>
                        <a href="tel:+41 44 520 08 04">+41 44 520 08 04</a>
                      </li>
                      <li>
                        <label>Fax: </label>
                        <a href="tel:+41 44 520 08 43">+41 44 520 08 43</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="cta__right__btn">
                  <div>
                    <a
                      class="btn btn--oval btn--oval--blue"
                      href="/en/contact-us/"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
