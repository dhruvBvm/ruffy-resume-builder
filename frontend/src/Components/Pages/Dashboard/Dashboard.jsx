import { useContext, useEffect } from "react";
import "./Dashboard.scss";
import { Outlet } from "react-router-dom";

import DashboardSidebar from "../../Organism/DashboardSidebar/DashboardSidebar";
import DashboardNavbar from "../../Organism/DashboardNavbar/DashboardNavbar";
import { AppContext } from "../../../App";
import AuthRequired from "../../Organism/AuthRequired/AuthRequired";
import { getDashboardData } from "../../../utils/users/getDashboardData";

const Dashboard = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getDashboardData()
      .then((result) => {
        if (result.success) {
          dispatch({
            type: "SET_DASHBOARD_INFO",
            payload: { username: result.data.username },
          });
        }
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!state.isAuthenticated) {
    return <AuthRequired />;
  }
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__wrapper">
          <DashboardSidebar
            username={state.dashboardInfo?.username || "dhruv"}
          />
          <div className="dashboard__content">
            <DashboardNavbar />
            <div className="dashboard__outlet__wrapper">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
