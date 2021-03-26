import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom'

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list
  const history = useHistory()

  const routeToLogIn = () => {
    console.log('...routing')
    history.push('/LogInForm')
  }

  return (
    <div className='home-wrapper'>
        <button
        onClick={routeToLogIn}
        className='md-button shop-button'
      >
        LogIn Now!
      </button>
      <div>
      <img
        className='home-image'
        src='https://i.pinimg.com/originals/25/c8/48/25c848940552cafac0fbf68a146f5190.jpg'
        alt=''
      />
      </div>
    </div>
  )
}