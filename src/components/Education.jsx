import React from "react";

function Education() {
  return (
    <div className="container my-4 p-4 border rounded bg-light shadow-sm">
      <h4 className="mb-3">Education</h4>

      <div className="d-flex justify-content-between align-items-start flex-wrap">
        <div>
          <h6 className="mb-1 fw-semibold">Computer Science</h6>
          <p className="mb-0 text-muted">University Of Houston</p>
        </div>

        <div>
          <span className="text-primary fw-semibold">2021</span>
        </div>
      </div>
    </div>
  );
}

export default Education;
