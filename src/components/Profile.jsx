import React, { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";

function Profile() {
  const [editDetails, setEditDetails] = useState(false);
  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    phone: "",
    location: ""
  });

  function handleDetails(event) {
    setDetails({
      ...details,
      [event.target.name]: event.target.value
    });
  }

  function handleEditDetails() {
    setEditDetails(true);
  }

  return (
    <div className="profile">

<div className="d-flex justify-content-between" >
      <div className="title">
        <h2>My Profile</h2>
        <p>Manage your personal information and skills</p>
      </div>
    <div className="edit-button">
      <button className="btn btn-dark" onClick={handleEditDetails}>
      <i className="bi bi-pencil-square me-2"></i>Edit Profile
      </button>
    </div>
</div>

       {!editDetails ? (
  <div className="container p-4 border rounded bg-light">
    <div className="row">
      <div className="col-md-6 mb-3">
        <strong>Full Name:</strong>
        <div>{details.fullname || 'N/A'}</div>
      </div>
      <div className="col-md-6 mb-3">
        <strong>Email:</strong>
        <div>{details.email || 'N/A'}</div>
      </div>
      <div className="col-md-6 mb-3">
        <strong>Phone:</strong>
        <div>{details.phone || 'N/A'}</div>
      </div>
      <div className="col-md-6 mb-3">
        <strong>Location:</strong>
        <div>{details.location || 'N/A'}</div>
      </div>
    </div>
  </div>
) : (
  <form className="container p-4 border rounded bg-light">
    <div className="row">
      <div className="col-md-6 mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          name="fullname"
          className="form-control"
          value={details.fullname}
          onChange={handleDetails}
          placeholder="Full Name"
        />
      </div>
      <div className="col-md-6 mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={details.email}
          onChange={handleDetails}
          placeholder="Email"
        />
      </div>
      <div className="col-md-6 mb-3">
        <label className="form-label">Phone</label>
        <input
          type="text"
          name="phone"
          className="form-control"
          value={details.phone}
          onChange={handleDetails}
          placeholder="Phone"
        />
      </div>

      <div className="col-md-6 mb-3">
        <label className="form-label">Location</label>
        <input
          type="text"
          name="location"
          className="form-control"
          value={details.location}
          onChange={handleDetails}
          placeholder="Location"
        />
      </div>

    </div>

    <div className="d-flex gap-3 mt-3">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setEditDetails(false)}
      >
        Save
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => setEditDetails(false)}
      >
        Cancel
      </button>
    </div>
  </form>
)}

<div><About /> {console.log("About rendered")}</div>
<div><Skills /> {console.log("Skills rendered")}</div>
<div><Education /> {console.log("Education rendered")}</div>
    </div>
  );
}

export default Profile;
