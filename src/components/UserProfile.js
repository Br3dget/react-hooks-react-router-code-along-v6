import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default UserProfile;


