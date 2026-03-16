export const setAuthStatus = (state, payload) => {
  const { status, info } = payload;
  return {
    ...state,
    isAuthenticated: status,
    user: info
      ? {
          ...state.user,
          ["username"]: info.username,
          ["role"]: info.role,
          ["emailAddress"]: info.emailAddress,
          id: info._id,
        }
      : {
          ...state.user,
        },
  };
};
