import { useContext } from "react";
import "./DashboardNavbar.scss";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiDashboard3Line } from "react-icons/ri";
import { AppContext } from "../../../App";

import { RxHamburgerMenu } from "react-icons/rx";

const DashboardNavbar = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="dashboard__navbar">
      <div className="dashboard__navbar__active">
        <div className="icon">
          <RiDashboard3Line />
        </div>
        <div className="icon__hamburger">
          <RxHamburgerMenu/>
        </div>
      </div>

      <div className="dashboard__navbar__links">
        <NavLink to={"/dashboard/user-resumes"}>Github</NavLink>
        <NavLink to={"/dashboard/user-resumes"}>LinkedIn</NavLink>
        <NavLink to={"/dashboard/user-resumes"}>Twitter</NavLink>
      </div>
      <div className="dashboard__navbar__accounts">
        <span>{state?.user?.username}</span>
        <div className="icon">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
