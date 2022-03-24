import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/UserTypeToggle";

const UserTypeToggle = (label, props) => {
  console.log(props)
  return (
    <Wrapper>
      <div className="container">
        <small>Register as Customer or Porter?</small>
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" onChange={props.handleToggle} checked={props.checked} />
          <label className="label" htmlFor="porter">
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserTypeToggle;
