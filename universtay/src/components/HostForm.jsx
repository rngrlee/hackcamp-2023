const HostForm = (props) => {
    
    return (
        <>
            <form onSubmit={props.addNewHost} className="form">
                <div>
                    name: <input className='input' value={props.newName}
                onChange={props.handleNameChange}/>
                </div>
                <div>
                    country: <input className='input' value={props.newCountry} 
                    onChange={props.handleCountryChange}/>
                </div>
                <div>
                    city: <input className='input' value={props.newCity} 
                    onChange={props.handleCityChange}/>
                </div>
                <div>
                    bio: <input className='input' value={props.newBio} 
                    onChange={props.handleBioChange}/>
                </div>
                <div>
                    accessibility: <input placeholder="leave blank if N/A" className='input' value={props.newAccessible} 
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