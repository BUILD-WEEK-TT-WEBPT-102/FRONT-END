import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import * as yup from 'yup'
import axios from 'axios'


const initialFormValues = {
  ///// TEXT INPUTS /////
  userName: '',
  phoneNumber: '',
  password: '',
}

// INITIALIZE FORM ERRORS
const initialFormErrors = {
    userName: '',
    phoneNumber: '',
    password: '',
}

const initialDisabled = true
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
        .required('Password is required, please fill out.')
            
})


export default function SignupForm() {
  const [formValues, setFormValues] = useState(initialFormValues)          
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)  
  const { push } = useHistory();
      

  // EVENT HANDLERS 
  const setFormErrors = (name, value) => {
    yup
     .reach(schema, name)
     .validate(value)
     .then(() => setErrors({ ...errors, [name]: "" }))
     .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
 };

 const inputChange = (event) => {
   setFormValues({ ...formValues, [event.target.name]: event.target.value });
   const { name, value } = event.target;
   setFormErrors(name, value);
 };

    // POST NEW USER USING HELPER
    const formSubmit = async (event) => {
      event.preventDefault();

      const newUser = {
      userName: formValues.userName.trim(),
      phoneNumber: formValues.phoneNumber.trim(),
      password: formValues.password.trim(),
    }

      try {
        const response = axios.post(
          " https://backend-u4-ttwebpt102.herokuapp.com/api/auth/register",
          newUser
        );
        localStorage.setItem("authToken", response.data);
        push("/sign-in");
        console.log(response);

      } catch (error) {
        console.log(error);
      }
    };

  // SIDE EFFECTS 
  useEffect(() => {
    // ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  
  return (
    <form className='form container' onSubmit={formSubmit}>
      <div className='form-group submit' >
        <h2>To Check on your plant</h2>

        {/* DISABLE THE BUTTON */}
        <button id = 'submitBtn2' disabled={disabled}>SignUp</button>

        <div className='errors'>
          {/* RENDER THE VALIDATION ERRORS HERE */}
          <div>{formErrors.userName}</div>
          <div>{formErrors.phoneNumber}</div>
          <div>{formErrors.password}</div>  
        </div>
      </div>

      <div className='form-groupInputs'>
        <h4>USER'S INFORMATION</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        <label>UserName&nbsp;
          <input
            value={formValues.userName}
            onChange={inputChange}
            name='userName'
            type='text'
          />
        </label>

        <label>phoneNumber&nbsp;
          <input
            value={formValues.phoneNumber}
            onChange={inputChange}
            name='phoneNumber'
            type='number'
          />
        </label>
        
        <label>Password&nbsp;
          <input
            value={formValues.password}
            onChange={inputChange}
            name='password'
            type='password'
          />
        </label>
        
      </div>

    
    </form>
  )
}