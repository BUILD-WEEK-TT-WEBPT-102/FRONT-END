import React from 'react'

export default function LogInForm(props) {
  const {values,submit,change,disabled,errors,} = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
      //value works on the target
    const { name, value } = evt.target
        change(name, value)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit' >
        <h2>To Check on your plant</h2>

        {/* DISABLE THE BUTTON */}
        <button id = 'submitBtn2' disabled={disabled}>LogIn</button>

        <div className='errors'>
          {/* RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.userName}</div>
          <div>{errors.phoneNumber}</div>
          <div>{errors.password}</div>  
        </div>
      </div>

      <div className='form-groupInputs'>
        <h4>USER'S INFORMATION</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        <label>UserName&nbsp;
          <input
            value={values.userName}
            onChange={onChange}
            name='userName'
            type='text'
          />
        </label>

        <label>phoneNumber&nbsp;
          <input
            value={values.phoneNumber}
            onChange={onChange}
            name='phoneNumber'
            type='number'
          />
        </label>
        
        <label>Password&nbsp;
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>
        
      </div>

    
    </form>
  )
}