const HostForm = (props) => {
    
    return (
        <>
            <form onSubmit={props.addNewHost}>
                <div>
                    name: <input value={props.newName}
                onChange={props.handleNameChange}/>
                </div>
                <div>
                    country: <input value={props.newCountry} 
                    onChange={props.handleCountryChange}/>
                </div>
                <div>
                    city: <input value={props.newCity} 
                    onChange={props.handleCityChange}/>
                </div>
                <div>
                    bio: <input value={props.newBio} 
                    onChange={props.handleBioChange}/>
                </div>
                <div>
                    accessibility: <input placeholder="leave blank if non accessible" value={props.newAccessible} 
                    onChange={props.handleAccessibleChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default HostForm