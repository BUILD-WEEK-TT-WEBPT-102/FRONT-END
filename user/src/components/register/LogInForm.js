import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: "",
  password: "",
};

//LET'S INITIALIZE FORM ERRORS
const initialFormErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;
// Here goes the schema for the form

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required, please fill out.")
    .min(3, "Username must be 3 characters long"),
  password: yup
    .string()
    .min(8, "Password must be 8 characters long")
    .required("Password is required, please fill out."),
});

export default function LogInForm({ userId, setUserId }) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push } = useHistory();

  // EVENT HANDLERS
  const setErrors = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    const { name, value } = event.target;
    setErrors(name, value);
  };

  const formSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    axios
      .post("https://backend-u4-ttwebpt102.herokuapp.com/api/auth/login", user)
      .then((response) => {
        localStorage.setItem("authToken", response.data.token);
        console.log(response);
        setUserId(response.data.user_id);
        push("/my-plant");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // SIDE EFFECTS
  useEffect(() => {
    // ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <form className="form container" onSubmit={formSubmit}>
      <div className="form-group submit">
        <h2>To Check on your plant</h2>

        {/* DISABLE THE BUTTON */}
        <button id="submitBtn2" disabled={disabled}>
          LogIn
        </button>

        <div className="errors">
          {/* RENDER THE VALIDATION ERRORS HERE */}
          <div>{formErrors.username}</div>
          <div>{formErrors.password}</div>
        </div>
      </div>

      <div className="form-groupInputs">
        <h4>USER'S INFORMATION</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        <label>
          Username&nbsp;
          <input
            value={formValues.username}
            onChange={inputChange}
            name="username"
            type="text"
          />
        </label>

        <label>
          Password&nbsp;
          <input
            value={formValues.password}
            onChange={inputChange}
            name="password"
            type="password"
          />
        </label>
      </div>
    </form>
  );
}
