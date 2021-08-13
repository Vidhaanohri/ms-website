import React from "react";
import { Content, Hero, Services } from "../../components";
import "./services.css";

export default function ServicesPage({ setPos }) {
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const value = window.scrollY;
      setPos((pre) => value * 1);
    });
  }, [setPos]);
  return (
    <section id="service" className="service-page">
      <Hero />
      <Content />
      <Services />
      {/* <Footer /> */}
    </section>
  );
}
