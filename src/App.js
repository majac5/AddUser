import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/Users/AddUser";
import AboutUser from "./components/Users/AboutUser";
import ExistingUsers from "./components/Users/ExistingUsers";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/aboutUser" element={<AboutUser />} />
        <Route exact path="/existingUsers" element={<ExistingUsers />} />
      </Routes>
    </div>
  );
}

export default App;
