import React from "react";
import Wrapper from "../../assets/wrappers/RegisterPage";
import Logo from "../../components/Logo";
import FormRow from "../../components/FormRow";
import UserTypeToggle from "../../components/UserTypeToggle";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  porter: false,
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setValues(!values.porter)
  }

  const onSubmit = (x) => {
    return x;
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
      <h3>{ !values.isMember ? "Register" : "Login" }</h3>
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
        <UserTypeToggle label={"porter"} id="porter" handleToggle={()=> setValues(!values.porter)} checked={values.porter}/>
                <button type='submit' className='btn btn-block'>
          SUBMIT
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
