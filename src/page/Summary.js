import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';


function Summary() {
  const location = useLocation();
  const { user } = location.state || {};
  const { latitude, longitude } = useParams();

  useEffect(() => {
    const iframeData = document.getElementById('iframeId');

    if (!isNaN(parseFloat(latitude)) && !isNaN(parseFloat(longitude))) {
      // Use the parsed latitude and longitude in the iframe URL
      iframeData.src = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`;
    }
  }, [latitude, longitude]);

  return (
    <div className="summary-container">
      <h1>User Summary</h1>
      {user ? (
        <div>
          <img src={user.photo} alt={`${user.firstName} ${user.lastName}`} />
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <p>Description: {user.description}</p>
          <p>Hobbies: {user.hobbies.join(', ')}</p>
          <p>Achievements: {user.achievements.join(', ')}</p>
          <p>Skills: {user.skills.join(', ')}</p>
          <p>Contact Phone: {user.contacts.phone}</p>
          
        </div>
      ) : (
        <div>User data not available</div>
      )}

      {/* Render the map */}
      <div>
        <iframe id="iframeId" title="User Location" height="500px" width="100%"></iframe>
      </div>
    </div>
  );
}

export default Summary;
