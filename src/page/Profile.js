import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userData } from '../Newdata/Userdata';
import './profile.css';
import Summary from './Summary'; // Import the Summary component

function Profile() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = userData.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase()) || user.address.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleCardClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="profile-container">
        <div className="top-right-button">
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
      <b></b>
      <h1>User Profile</h1>
      <input
        type="text"
        placeholder="Search by name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredUsers.map(user => (
        <div key={user.id} className="profile-card" onClick={() => handleCardClick(user)}>
          <img src={user.photo} alt={`${user.firstName} ${user.lastName}`} />
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <p>{user.address}</p>
          {/* Pass selectedUser as props to the Summary component */}
          <Link to="/summary">
            <button>View Summary</button>
          </Link>
        </div>
      ))}
      {selectedUser && (
        <div className="selected-user">
          <h2>{`${selectedUser.firstName} ${selectedUser.lastName}`}</h2>
          <p>{selectedUser.description}</p>
        </div>
      )}
      {/* Render the Summary component and pass selectedUser as props */}
      {selectedUser && <Summary user={selectedUser} />}
    </div>
  );
}

export default Profile;
