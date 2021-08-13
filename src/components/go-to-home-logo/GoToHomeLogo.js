import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assest/logo.png";
export default function GoToHomePageLogo() {
  const { selectedLanguage } = useSelector((state) => state);
  return (
    <Link to={`/${selectedLanguage}/`}>
      <img className="mega-logo" src={logo} alt="mega-logo" />
    </Link>
  );
}
