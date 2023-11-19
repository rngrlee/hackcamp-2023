function Profile(props) {
  
    return (
      <>
       <h3>{props.name}</h3>
       <p>{props.country}</p>
       <p>{props.city}</p>
       <p>{props.bio}</p>
       <p>{props.accessible}</p>
      </>
    )
  }

export default Profile