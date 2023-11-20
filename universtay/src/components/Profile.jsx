function Profile(props) {
  
    return (
      <div className='profile'>
       <h3>{props.name}</h3>
       <p>{props.country}</p>
       <p>{props.city}</p>
       <p>{props.bio}</p>
       <p>{props.accessible}</p>
      </div>
    )
  }

export default Profile