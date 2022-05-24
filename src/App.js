import React,{useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import AboutUser from './components/Users/AboutUser';
import ExistingUsers from './components/Users/ExistingUsers';

function App() {

  const [usersList, setUsersList] = useState(() => {
    const saved = localStorage.getItem("users");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    });
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(usersList));
  }, [usersList]);



  return (

    <div>
      <Routes>
        <Route path="/" element={<AddUser onAddUser={addUserHandler} />} />
        <Route path="/aboutuser" element={<AboutUser />} />
        <Route path="/existingusers" element={<ExistingUsers />} />
      </Routes>
      {usersList.length !== 0 ? <UsersList users={usersList} /> : null}
      <AboutUser />
      <ExistingUsers />
    
    
    </div>
  );
}

export default App;
