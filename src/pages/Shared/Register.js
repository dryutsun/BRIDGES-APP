import React from "react";
import Wrapper from "../../assets/wrappers/RegisterPage";
import Logo from "../../components/Logo";
import FormRow from "../../components/FormRow";
import { useState } from "react";
import ToggleWrapper from "../../assets/wrappers/UserTypeToggle";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const [porter, setPorter] = useState(true)

  const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
  };


  const onSubmit = (x) => {
    return x;
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h3>{!values.isMember ? "Register" : "Login"}</h3>
        <Logo />

        <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <ToggleWrapper>
          <div className="container">
            <small>Register as Customer or Porter?</small>
            <div className="toggle-switch">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => setPorter(!porter)}
                name="porter"
                id="porter"
                value={values.porter}
              />
              <label className="label" htmlFor="porter">
                <span className="inner" />
                <span className="switch" />
              </label>
            </div>
          </div>
        </ToggleWrapper>
        <button type="submit" className="btn btn-block">
          SUBMIT
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
