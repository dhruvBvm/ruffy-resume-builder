import { useContext } from "react";
import "./DashboardNavbar.scss";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiDashboard3Line } from "react-icons/ri";
import { AppContext } from "../../../App";

const DashboardNavbar = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="dashboard__navbar">
      <div className="dashboard__navbar__active">
        <div className="icon">
          <RiDashboard3Line />
        </div>

        <div className="dashboard__navbar__active__page">Dashboard</div>
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
