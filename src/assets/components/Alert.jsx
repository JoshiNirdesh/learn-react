import React from "react";

const Alert = ({ children }) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button
          type="button"
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close"
        ></button>
        <button
          type="button"
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
