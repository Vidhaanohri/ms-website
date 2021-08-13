import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AboutAndVisionPage,
  CompanyDemoPage,
  DemoPage,
  HandyHRPage,
  HomePageComponent,
  HrmsPage,
  LoginPage,
  ManagementPage,
  OffboardingPage,
  PayrollPage,
  ProfessionalManegementPage,
  RecruitmentPage,
} from "./pages";
import "./styles.css";
import { MenuSliderComp } from "./components";
export default function App() {
  const [pos, setPos] = React.useState(0);
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => {
    document.querySelectorAll(".scrollbar-thumb").forEach((link) => {
      link.style.transform = `translateY(${pos}px)`;
      link.style.transition = "transform .5s linear";
    });
  }, [pos]);
  const handleSlide = () => {
    setMenu(!menu);
  };
  return (
    <div className="App">
      {/* Page content */}
      <section data-scrollbar="true" id="scroll-container">
        <Switch>
          <Route path="/:id/contact">
            <CompanyDemoPage />
          </Route>
          <Route path="/:id/login">
            <LoginPage />
          </Route>
          <Route path="/:id/demo-page">
            <CompanyDemoPage />
          </Route>
          <Route path="/:id/offboarding">
            <OffboardingPage />
          </Route>
          <Route path="/:id/about-&-vision">
            <AboutAndVisionPage />
          </Route>
          <Route path="/:id/professional-services">
            <ProfessionalManegementPage />
          </Route>
          <Route path="/:id/handy-hr">
            <HandyHRPage />
          </Route>
          <Route path="/:id/performance-management">
            <ManagementPage />
          </Route>
          <Route path="/:id/payroll">
            <PayrollPage />
          </Route>
          <Route path="/:id/hrms">
            <HrmsPage />
          </Route>
          <Route path="/:id/recruitment">
            <RecruitmentPage />
          </Route>
          <Route path="/:id">
            <HomePageComponent setPos={setPos} />
          </Route>
          <Route path="/">
            <DemoPage />
          </Route>
        </Switch>
      </section>
      {/* Sidebar in right width fixed position */}
      <aside className=" ">
        <button
          onClick={handleSlide}
          className={`btn btn--burger ${
            menu ? "active" : ""
          } btn--blank menu-toggle`}
        >
          <span className="btn--burger__part btn--burger__part--up"></span>
          <span className="btn--burger__part btn--burger__part--down"></span>
        </button>
      </aside>

      <div className="btn btn--burger btn--burger--overlay btn--burger--overlay--0">
        <span className="btn--burger__part btn--burger__part--up"></span>
        <span className="btn--burger__part btn--burger__part--down"></span>
      </div>
      <div className="btn btn--burger btn--burger--overlay btn--burger--overlay--1">
        <span className="btn--burger__part btn--burger__part--up"></span>
        <span className="btn--burger__part btn--burger__part--down"></span>
      </div>
      <div className="btn btn--burger btn--burger--overlay btn--burger--overlay--2">
        <span className="btn--burger__part btn--burger__part--up"></span>
        <span className="btn--burger__part btn--burger__part--down"></span>
      </div>
      <div className="btn btn--burger btn--burger--overlay btn--burger--overlay--3">
        <span className="btn--burger__part btn--burger__part--up"></span>
        <span className="btn--burger__part btn--burger__part--down"></span>
      </div>
      <div class="scrollbar-thumb scrollbar-thumb-y clone clone--1"></div>
      <div class="scrollbar-thumb scrollbar-thumb-y clone clone--2"></div>
      <div class="scrollbar-thumb scrollbar-thumb-y clone clone--3"></div>
      <div class="scrollbar-thumb scrollbar-thumb-y clone clone--4"></div>
      <MenuSliderComp menu={menu} handle={handleSlide} />
      <div class="scrollbar-line scrollbar-line--1"></div>
      <div class="scrollbar-line scrollbar-line--2"></div>
      <div class="scrollbar-line scrollbar-line--3"></div>
    </div>
  );
}
