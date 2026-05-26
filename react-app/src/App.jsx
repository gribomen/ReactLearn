//import React from 'react';

import './App.css';
import UserCard from './components/UserCard/UserCard';


function App() {

  const userData = {
    name: 'Анна Иванова',
    age: 28,
    email: 'anna@example.com'
  };

  return (
    <UserCard
      name={userData.name}
      age={userData.age}
      email={userData.email}
    />
  );
}

export default App;
