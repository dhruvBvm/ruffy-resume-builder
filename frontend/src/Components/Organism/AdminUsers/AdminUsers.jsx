import React, { useContext, useEffect } from "react";
import "./AdminUsers.scss";
import UsersList from "../UsersList/UsersList";
import { getAllUsers } from "../../../utils/admin/getAllUsers";
import { AppContext } from "../../../App";

const AdminUsers = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state)
  useEffect(() => {
    if (state.user?.role === "Super Admin") {
      getAllUsers()
        .then((result) => {
          console.log(result);
          if (result.data && result.success && result.statusCode === 600) {
            dispatch({
              type: "SET_ADMIN_USERS",
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
  return <div className="admin-users">{<UsersList users={state.allUsers} headline="List of All Users"/>}</div>;
};

export default AdminUsers;
