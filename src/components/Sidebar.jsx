import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaFolderOpen } from 'react-icons/fa';

function Sidebar() {
  const sidebarStyle = {
    width: '200px',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    borderRight: '1px solid #e0e0e0',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column'
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '40px',
    color: '#111',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px'
  };



  const hoverStyle = {
    backgroundColor: '#dee2e6'
  };

  return (
    <div className="sidebar" style={sidebarStyle}>
      <div style={titleStyle}>JobTracker</div>

   
  <Link
  to="/profile"
  className="btn btn-light text-start w-100 mb-2 d-flex align-items-center gap-2">
  <FaUserCircle />
  My Profile</Link>

<Link
  to="/applications"
  className="btn btn-light text-start w-100 d-flex align-items-center gap-2">
  <FaFolderOpen />
  My Applications
</Link>

</div>








  );
}

export default Sidebar;
