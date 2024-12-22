import React from "react";
import EditUser from "./EditUser";

const Users = ({ users, deleteUser, updateUser }) => {
  return (
    <div className="p-5 gap-2">
      {users.map((user) => {
        return (
          <div key={user.id} className="border rounded-md p-5 ">
            <p>name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Gen:{user.gen}</p>

            <div className="flex gap-2">
              <EditUser user={user} updateUser={updateUser} />

              <button
                className="btn btn-secondary"
                onClick={() => deleteUser(user.id)}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
