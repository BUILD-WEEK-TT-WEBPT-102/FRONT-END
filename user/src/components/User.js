function User({ details }) {
    if(!details) {
      return <h3>Working fetching your member&apos;s details...</h3>
    }
  
    return (
      <div className='user container'>
        <h2>{details.userName}</h2>
        <p>Email: {details.phoneNumber}</p>
      
      </div>
    )
  }
  
  export default User
  