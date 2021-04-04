import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: "",
  phoneNumber: "",
  password: "",
};

// INITIALIZE FORM ERRORS
const initialFormErrors = {
  username: "",
  phoneNumber: "",
  password: "",
};

const initialDisabled = true;
// Here goes the schema for the form

const formSchema = yup.object().shape({
    userName: yup.string()
        .trim()
        .required('userName is required, please fill out.')
        .min(3, 'userName must be 3 characters long'),
    phoneNumber: yup.string()
        .trim()
        .min(10, 'phone number must be 10 digits long.')
        .required('phone number is required, please fill out.'),
    password: yup.string()
        .min(8,'Password must be 8 characters long')
        .required('Password is required, please fill out.'), 
            
})


export default function SignupForm() {
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

  // POST NEW USER USING HELPER
  const formSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      username: formValues.username.trim(),
      phoneNumber: formValues.phoneNumber.trim(),
      password: formValues.password.trim(),
    };

    axios
      .post(
        "https://backend-u4-ttwebpt102.herokuapp.com/api/auth/register",
        newUser
      )
      .then((response) => {
        push("/sign-in");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  // SIDE EFFECTS
  useEffect(() => {
    // ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className=" container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left1 d-none d-md-flex"></div>
            <div className="card-body">
              <h5 className="card-title text-center">SIGN INTO YOUR ACCOUNT</h5>
              <form className="form-signin" onSubmit={formSubmit}>
                <div className="form-label-group">
                  <input
                    name="username"
                    type="text"
                    id="inputUserame"
                    className="form-control"
                    placeholder="Username"
                    value={formValues.username}
                    onChange={inputChange}
                    required
                    autoFocus
                  />
                  <label htmlFor="inputUserame">Username</label>
                </div>
                <div className="err-mes">{formErrors.username}</div>

                <div className="form-label-group">
                  <input
                    name="password"
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={inputChange}
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="err-mes">{formErrors.password}</div>

                <div className="form-label-group">
                  <input
                    name="phoneNumber"
                    type="text"
                    id="inputPhone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={formValues.phoneNumber}
                    onChange={inputChange}
                    required
                  />
                  <label htmlFor="inputPhone">Phone Number</label>
                </div>
                <div className="err-mes">{formErrors.phoneNumber}</div>

                <button
                  className="btn btn-lg btn-outline-success btn-block text-uppercase"
                  type="submit"
                  disabled={disabled}
                >
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
