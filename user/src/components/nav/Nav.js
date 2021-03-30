import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'


export default function Nav {
    useEffect(() => {
        axiosWithAuth()
          .get(`/users/${userId}`)
          .then((response) => {
            console.log(response.data);
            setCurrentUser(response.data);
          })
          .catch((error) => console.log(error));
      }, [userId]);
    

    return (
        <>
        <p>Hello </p>
  <Link>Home</Link>
  <Link>My Plants</Link>
  <Link>Profile</Link>
      </>
  
    )
}