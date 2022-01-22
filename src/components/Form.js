import React, { useState } from "react";
import { validate } from "./form/Form.module.css";

export const Form = (props) => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFields((state) => ({ ...state, [name]: value }));
    props.onChange({ [name]: value });
  };

  const errors = {};
  const validateInput = (e) => {
    let isError = false;

    if (fields.firstName.length < 2) {
      isError = true;
      errors.firstNameError = "first name character length cannot less than 2";
    }
    if (!fields.email.includes("@")) {
      isError = true;
      errors.emailError = "enter a valid email";
    }

    return isError;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // reset errors fields
    setFields((ps) => ({
      ...ps,
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: "",
    }));
    // console.log(fields);
    if (!validateInput()) {
      setFields({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
      });
    } else {
      setFields((ps) => ({ ...ps, ...errors }));
    }
  };

  return (
    <>
      <h2>hello form validation</h2>
      <form action="">
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          onChange={(e) => onChange(e)}
          value={fields.firstName}
          autoFocus
        />
        <small className={validate}>{fields.firstNameError}</small>
        <br />
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          onChange={(e) => onChange(e)}
          value={fields.lastName}
        />
        <small className={validate}>{fields.lastNameError}</small>
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={(e) => onChange(e)}
          value={fields.email}
        />
        <small className={validate}>{fields.emailError}</small>
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => onChange(e)}
          value={fields.password}
        />
        <small className={validate}>{fields.passwordError}</small>
        <br />
        <input type="submit" value="Submit" onClick={(e) => onSubmit(e)} />
      </form>
    </>
  );
};
