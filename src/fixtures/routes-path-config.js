export const PathConfig = {
  home: "/",
  hrms: "/hrms",
  payroll: "/payroll",
  recruitment: "/recruitment",
  performanceManagement: "/performance-management",
  facilityManagement: "/facility-management",
  contact: "/contact",
  takeaDemo: "/take-a-demo",
  aboutAndVision: "/about-and-vision",
  handyHr: "/handy-hr",
  offboarding: "/offboarding",
  login: "/login",
  professionalService: "/professional-services",
  dataAndSecurity: "/data-security-and-privacy"
};
export const RoutesPathConfig = {
  languageSelect: "/",
  home: "/:id",
  hrms: `/:id${PathConfig.hrms}`,
  payroll: `/:id${PathConfig.payroll}`,
  recruitment: `/:id${PathConfig.recruitment}`,
  performanceManagement: `/:id${PathConfig.performanceManagement}`,
  facilityManagement: `/:id${PathConfig.facilityManagement}`,
  contact: `/:id${PathConfig.contact}`,
  takeaDemo: `/:id${PathConfig.takeaDemo}`,
  aboutAndVision: `/:id${PathConfig.aboutAndVision}`,
  handyHr: `/:id${PathConfig.handyHr}`,
  offboarding: `/:id${PathConfig.offboarding}`,
  login: `/:id${PathConfig.login}`,
  professionalService: `/:id${PathConfig.professionalService}`
};
