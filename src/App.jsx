import React, { useState } from "react";
import Users from "./Components/Users";
import UsersForm from "./Components/UsersForm";

const App = () => {
  const [users, setUsers] = useState([]);

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }
  function updateUser(id, updateInfo) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return updateInfo;
        } else {
          return user;
        }
      })
    );
  }

  return (
    <div className="flex  h-screen justify-center items-center">
      <Users users={users} deleteUser={deleteUser} updateUser={updateUser} />
      <UsersForm setUsers={setUsers} />
    </div>
  );
};

export default App;
