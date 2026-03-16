import * as globalHandlers from "./reducers/globalReducers";
import * as dashboardHandlers from "./reducers/dashboardReducers";
import * as resumehandlers from "./reducers/resumeReducers";
import * as adminhandlers from "./reducers/adminReducers";

const handlers = {
  // Global Reducers
  SET_AUTH_STATUS: globalHandlers.setAuthStatus,

  // DashBoard Reducers
  SET_USER_DASHBOARD_INFO: dashboardHandlers.setUserDashboardInfo,
  SET_ADMIN_DASHBOARD_INFO: dashboardHandlers.setAdminDashboardInfo,

  // Resume Handlers
  SET_ALL_RESUMES: resumehandlers.setAllResumes,
  SET_USER_RESUMES: resumehandlers.setUserResumes,

  // Admin Resucers
  SET_ADMIN_USERS: adminhandlers.setAdminUsers,
};

export const reducer = (state, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action.payload) : state;
};
