function Profile(props) {
  
    return (
      <>
       <h3>{props.hosts.name}</h3>
       <p>{props.hosts.country}</p>
       <p>{props.hosts.city}</p>
       <p>{props.hosts.bio}</p>
       <p>{props.hosts.accessible}</p>
      </>
    )
  }

export default Profile