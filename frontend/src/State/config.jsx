export const config = {
  state: {
    isAuthenticated: false,
    user: {
      username: null,
      role: null,
      id: null,
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
    allResumes: [],
    userResumes: [],
    allUsers: [],
  },
};
