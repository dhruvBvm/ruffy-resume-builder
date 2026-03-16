export const setAdminUsers = (state, payload) => {
  const users = payload.data;
  return {
    ...state,
    allUsers: users,
  };
};
