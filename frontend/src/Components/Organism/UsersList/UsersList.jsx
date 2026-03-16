import React, { useEffect, useState } from "react";
import "./UsersList.scss";
import Button from "../../Molecules/Button/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { deleteUser } from "../../../utils/users/deleteUser";

const UsersList = ({ users, headline }) => {
  return (
    <div className="users-table">
      <h2>{headline || "Users List"}</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Index</th>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>EMail Address</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td contentEditable={false}>{index + 1}</td>
                  <td contentEditable={false}>{user.username}</td>
                  <td contentEditable={false}>{user.firstname}</td>
                  <td contentEditable={false}>{user.lastname}</td>
                  <td contentEditable={false}>{user.emailAddress}</td>
                  <td contentEditable={false}>{user.phoneNumber}</td>
                  <td contentEditable={false}>{user.role || "User"}</td>
                  <td contentEditable={false}>{user.age}</td>
                  <td className="actions">
                    <Button type="button" onClick={() => {}}>
                      <CiEdit />
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        deleteUser(user._id);
                      }}
                    >
                      <MdDeleteOutline />
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
