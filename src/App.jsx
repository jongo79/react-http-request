import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
import UserCard from './UserCard';

function App() {
  const [usersData, setUsersData] = useState([]);

  const handleClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsersData(response.data);
      })
      .catch(error => {
        console.log('Error fetching users:', error);
      })
      .finally(() => {
        console.log('Request completed');
      });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>REACT HTTP REQUEST</h1>
      </div>
      <div className="button-container">
        <button className='button-request' onClick={handleClick}>LAUNCH</button>
      </div>

      <div className="data-container">
        {usersData.map((user, index) => (
          <UserCard key={index} user={{ name: user.name, email: user.email }} />
        ))}
      </div>
    </div>
  );
}

export default App;
