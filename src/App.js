import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Applications from "./components/Applications";
import { Route, Routes, Navigate } from "react-router-dom"; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content" style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
