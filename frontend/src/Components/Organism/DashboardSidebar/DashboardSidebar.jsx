import React, { useContext } from "react";
import "./DashboardSidebar.scss";

// icons
import { RiDashboard3Line } from "react-icons/ri";
import { GoFileSubmodule } from "react-icons/go";
import { HiOutlineTemplate } from "react-icons/hi";
import { FaCirclePlus } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  return (
    <div className="dashboard__sidebar">
      <div className="dashboard__sidebar__profile">
        <div className="dashboard__sidebar__profile__icon">
          <FaUserAlt />
        </div>
        <span>Resume Builder</span>
        <div className="dashboard__sidebar__profile__icon down-arrow">
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div
        className="dashboard__sidebar__create-resume"
        onClick={() => {
          navigate("/template-one");
        }}
      >
        <div className="dashboard__sidebar__create-resume__icon">
          <FaCirclePlus />
        </div>
        <span>Create Resume</span>
      </div>

      {/* Users Routes */}
      <div className="dashboard__sidebar__links">
        <NavLink to={"/dashboard"}>
          <RiDashboard3Line />
          Dashboard
        </NavLink>
        <NavLink to={"/dashboard/user-resumes"}>
          <GoFileSubmodule />
          My Resumes
        </NavLink>
        <NavLink to={"/dashboard/resumes"}>
          <GoFileSubmodule />
          All Resumes
        </NavLink>
        <NavLink to={"/dashboard/user-resumes"}>
          <HiOutlineTemplate />
          Fav Resumes
        </NavLink>
        <NavLink to={"/dashboard/user-templates"}>
          <HiOutlineTemplate />
          Templates
        </NavLink>
      </div>

      {/* Admin Routes */}
      {state?.user?.role === "Super Admin" && (
        <div className="dashboard__sidebar__links">
          <h4>Admin Routes</h4>
          <NavLink to={"/dashboard/users-list"}>
            <GoFileSubmodule />
            All Users
          </NavLink>
          <NavLink to={"/dashboard/resumes"}>
            <GoFileSubmodule />
            Stats
          </NavLink>
          <NavLink to={"/dashboard/user-resumes"}>
            <HiOutlineTemplate />
            Logs Files
          </NavLink>
        </div>
      )}

      <div className="account-info">
        <NavLink to={"/dashboard"}>
          <RiDashboard3Line />
          Account Settings
        </NavLink>
        <NavLink to={"/dashboard"}>
          <RiDashboard3Line />
          Settings
        </NavLink>
        <NavLink to={"/logout"}>
          <RiDashboard3Line />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSidebar;
