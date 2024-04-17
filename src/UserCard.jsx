import React from 'react';
import './UserCard.css'; // Import CSS file

const UserCard = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="user-card">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default UserCard;
