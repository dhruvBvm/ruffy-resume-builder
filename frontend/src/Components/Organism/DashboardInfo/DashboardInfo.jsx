import { useContext, useEffect } from "react";
import "./DashboardInfo.scss";
import Button from "../../Molecules/Button/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { FaPlus } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { AiOutlineFileZip } from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { TbEyeSearch } from "react-icons/tb";

// data
import { useNavigate } from "react-router-dom";
import ResumesCard from "../ResumesCard/ResumesCard";
import { AppContext } from "../../../App";
import { getDashboardData } from "../../../utils/users/getDashboardData";
import { getAdminDashboardData } from "../../../utils/admin/getAdminDashboardData";
import UsersList from "../UsersList/UsersList";

const DashboardInfo = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(
      ".dashboard__info__stats-cards",
      {
        y: 100,
        stagger: 0.8,
        opacity: 0,
      },
      "a",
    );
    tl.from(
      ".dashboard__info__stats-cards__card .icon",
      {
        opacity: 0,
        scale: 0,
        stagger: 0.2,
      },
      "b",
    );
    tl.from(
      ".dashboard__info__stats-cards__card .stats",
      {
        opacity: 0,
        scale: 0,
        stagger: 0.2,
      },
      "c",
    );
  }, []);

  useEffect(() => {
    if (state.user?.role === "User") {
      getDashboardData()
        .then((result) => {
          if (result.data && result.success && result.statusCode === 600) {
            dispatch({
              type: "SET_USER_DASHBOARD_INFO",
              payload: {
                data: result.data,
              },
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
      return;
    }
    if (state.user?.role === "Super Admin") {
      getAdminDashboardData()
        .then((result) => {
          if (result.data && result.success && result.statusCode === 600) {
            dispatch({
              type: "SET_ADMIN_DASHBOARD_INFO",
              payload: {
                data: result.data,
              },
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="dashboard__info">
      <div className="dashboard__info__intro">
        <div>
          <h1>Welcome back, {state.user?.username}👋</h1>
          <p>Ready to land your next job?</p>
        </div>
        <div className="actions">
          <Button
            onClick={() => {
              navigate("/templates");
            }}
          >
            <FaPlus />
            <span>Create New Resume</span>
          </Button>
          <Button
            onClick={() => {
              navigate("/templates");
            }}
          >
            <FiUpload />
            <span>Import Resume</span>
          </Button>
        </div>
      </div>

      <h2 className="dashboard__info__header">
        {state.user?.role === "Super Admin" ? "Admin Stats" : "Profile Stats"}
      </h2>
      {state.user?.role === "User" && (
        <div className="dashboard__info__stats-cards">
          <div className="dashboard__info__stats-cards__card">
            <div className="icon">
              <AiOutlineFileZip />
            </div>
            <div className="stats">
              <h2>{state.dashboard.userStats.totalResumes}</h2>
              <p>Total Resumes</p>
            </div>
          </div>
          <div className="dashboard__info__stats-cards__card">
            <div className="icon">
              <TbSend />
            </div>
            <div className="stats">
              <h2>{12}</h2>
              <p>Applications Sent</p>
            </div>
          </div>
          <div className="dashboard__info__stats-cards__card">
            <div className="icon">
              <CiCalendar />
            </div>
            <div className="stats">
              <h2>{3}</h2>
              <p>Interviews</p>
            </div>
          </div>
          <div className="dashboard__info__stats-cards__card">
            <div className="icon">
              <TbEyeSearch />
            </div>
            <div className="stats">
              <h2>{248}</h2>
              <p>Profile Views</p>
            </div>
          </div>
        </div>
      )}
      {state.user?.role === "Super Admin" && (
        <div className="dashboard__info__stats-cards">
          <div className="dashboard__info__stats-cards__card">
            <div className="icon">
              <AiOutlineFileZip />
            </div>
            <div className="stats">
              <h2>{state.dashboard.adminStats.totalResumes}</h2>
              <p>Total Resumes</p>
            </div>
          </div>
          <div className="dashboard__info__stats-cards__card">
            <div className="icon">
              <TbSend />
            </div>
            <div className="stats">
              <h2>{state.dashboard.adminStats.userCount}</h2>
              <p>Total Users</p>
            </div>
          </div>
          <div className="dashboard__info__stats-cards__card">
            <div className="icon">
              <CiCalendar />
            </div>
            <div className="stats">
              <h2>{3}</h2>
              <p>Interviews</p>
            </div>
          </div>
          <div className="dashboard__info__stats-cards__card">
            <div className="icon">
              <TbEyeSearch />
            </div>
            <div className="stats">
              <h2>{248}</h2>
              <p>Profile Views</p>
            </div>
          </div>
        </div>
      )}
      {state.user.role === "Super Admin" && (
        <UsersList
          users={state.dashboard.adminStats.recentUsers}
          headline="Recent Users That have Register"
        />
      )}

      <ResumesCard
        resumes={
          state.user?.role === "Super Admin"
            ? state.dashboard.adminStats?.recentResumes
            : state.dashboard.userStats?.recentResumes
        }
        title={"Recent Resumes"}
        isActions={true}
      />
    </div>
  );
};

export default DashboardInfo;
