import React from "react";
import styled from "styled-components";

const UserTypeToggle = (label, props, handleToggle) => {
  console.log(props)
  return (
      <div className="container">
        <small>Register as Customer or Porter?</small>
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" onChange={handleToggle} name={label} id={label} checked={props.porterStatus} />
          <label className="label" htmlFor={label}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
  );
};

export default UserTypeToggle;
