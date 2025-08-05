  import React from "react";
  import { Button, Card, Badge } from "react-bootstrap";
import { FaEye, FaCalendar, FaClock, FaEyeSlash } from "react-icons/fa";
  function Applications()
  {
  
   return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>My Applications</h2>
          <p className="text-muted">Track your job applications and apply for new positions</p>
        </div>
        <Button variant="dark" className="fw-bold">
          + Apply for Position
        </Button>
      </div>
      </div>
      );
}
export default Applications;