import { Route, Link, Switch } from 'react-router-dom'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import * as yup from 'yup'
import Home from './Home'
import User from './User'
import SignupForm from './SignupForm'
import LogInForm from './LogInForm'



// INITIAL STATES 
const initialFormValues = {
  ///// TEXT INPUTS /////
  userName: '',
  phoneNumber: '',
  password: '',
  
  ///// DROPDOWN /////
  selectplant: '',
  
}
//LET'S INITIALIZE FORM ERRORS
const initialFormErrors = {
    userName: '',
    phoneNumber: '',
    password: '',
    selectPlant: ''
 
}
const initialUsers = []
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
        .required('Password is required, please fill out.'), 
    selectPlant: yup.string()
        .oneOf(['small', 'medium', 'large', 'extra-larg'], 'selectPlant is required'),      
    
   
    
})


export default function App() {
  // STATES 
  const [users, setUsers] = useState(initialUsers)          
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)       
  // HELPERS 
  const postNewUser = newUser => {
    // ON SUCCESS ADD NEWLY CREATED USER TO STATE
    //    helper to [POST] `newUser` to `https://reqres.in/api/users`
    //    and regardless of success or failure, the form should reset
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.log(err);
      })
      setFormValues(initialFormValues)
  }

  // EVENT HANDLERS 
  const inputChange = (name, value) => {
    // 🔥 RUN VALIDATION WITH YUP
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        // happy path
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const formSubmit = () => {
    const newUser = {
      userName: formValues.userName.trim(),
      phoneNumber: formValues.phoneNumber.trim(),
      password: formValues.password.trim(),
      selectPlant: formValues.selectplant.trim()
    }
    // POST NEW USER USING HELPER
    postNewUser(newUser)
  }

  // SIDE EFFECTS 
  
  useEffect(() => {
    // ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>Never let your plants dry again.</h1></header>
      <nav>
        <h1 className='pizza-header'>Plant&apos;s Radience</h1>
        <div className='nav-links'>
          {/*  Make Links to navigate us Home (`/`) and (`/SignupForm`) */}
          <Link to="/">Home</Link>
          <Link to="/SignupForm">SignUp!</Link>
        </div>
      </nav>
       {/* Build a Switch with a Route for each of the components imported at the top */}
       <Switch>
        
        <Route path="/SignupForm/:userID"
        >
         <User users={users} />
        </Route>
        
        <Route exact path="/SignupForm">
          <SignupForm users={users} 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}

        />
        </Route>
        <Route path="/LogInForm">
          <LogInForm users={users} 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors} 
        />
        </Route>
       
        <Route path="/">
          <Home/>
        </Route>
      </Switch>

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}