import React from "react";

function Skills() {
  return (
    <div className="container my-4 p-4 border rounded bg-light shadow-sm">
      <h4 className="mb-3">Skills</h4>
      <div className="d-flex flex-wrap gap-3">
        <span className="badge rounded-pill bg-secondary-subtle text-dark px-3 py-2 fw-medium shadow-sm">
          React.js
        </span>
        <span className="badge rounded-pill bg-secondary-subtle text-dark px-3 py-2 fw-medium shadow-sm">
          Angular
        </span>
        <span className="badge rounded-pill bg-secondary-subtle text-dark px-3 py-2 fw-medium shadow-sm">
          AWS
        </span>
        <span className="badge rounded-pill bg-secondary-subtle text-dark px-3 py-2 fw-medium shadow-sm">
          TypeScript
        </span>
        <span className="badge rounded-pill bg-secondary-subtle text-dark px-3 py-2 fw-medium shadow-sm">
          Node.js
        </span>
      </div>
    </div>
  );
}

export default Skills;
