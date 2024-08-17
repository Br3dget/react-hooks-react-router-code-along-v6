import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const UserCard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default UserCard;

