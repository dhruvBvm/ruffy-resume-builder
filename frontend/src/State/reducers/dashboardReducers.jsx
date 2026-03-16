export const setDashboardData = (state, payload) => {
  return {
    ...state,
    dashboardInfo: {
      ...state.dashboardInfo,
      username: payload.username,
    },
  };
};

export const setUserDashboardInfo = (state, payload) => {
  const { recentResumes, totalResumes } = payload.data;
  return {
    ...state,
    dashboard: {
      ...state.dashboard,
      userStats: {
        totalResumes: totalResumes,
        recentResumes: recentResumes,
      },
    },
  };
};
export const setAdminDashboardInfo = (state, payload) => {
  const { recentResumes, totalResumes, recentUsers, userCount } = payload.data;
  return {
    ...state,
    dashboard: {
      ...state.dashboard,
      adminStats: {
        recentResumes,
        totalResumes,
        recentUsers,
        userCount,
      },
    },
  };
};

export const config = {
  state: {
    isAuthenticated: false,
    user: {
      username: null,
      role: null,
    },
    dashboard: {
      loading: false,
      userStats: {
        totalResumes: 0,
        recentResumes: [],
      },
      adminStats: {
        recentResumes: [],
        totalResumes: 0,
        recentUsers: [],
        userCount: 0,
      },
      error: null,
    },
  },
};
