import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Filter from './components/Filter'
import hostService from './services/hostService'
import HostForm from './components/hostForm'

function App() {
  const [hosts, setHosts] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newCountry, setNewCountry] = useState('')
  const [newCity, setNewCity] = useState('')
  const [newBio, setNewBio] = useState('')
  const [newAccessible, setNewAccessible] = useState('')

  useEffect(() => {
    console.log('effect')
    hostService
      .getAll()
      .then(initialHosts => {
        console.log('promise fulfilled')
        setHosts(initialHosts)
      })
  }, [])

  const addNewHost = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    
    const newHostObject = {
      name: newName,
      country: newCountry,
      city: newCity,
      bio: newBio,
      accessible: newAccessible ? 'is accessible' : "not accessible"
    }

    hostService
      .create(newHostObject)
      .then(returnedHost => {
        setHosts(persons.concat(returnedPerson))
        setNewName('')
        setNewCountry('')
        setNewCity('')
        setNewBio('')
        setNewAccessible('')
      })
    }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  } 

  const handleCountryChange = (event) => {
    console.log(event.target.value)
    setNewCountry(event.target.value)
  } 

  const handleCityChange = (event) => {
    console.log(event.target.value)
    setNewCity(event.target.value)
  } 

  const handleBioChange = (event) => {
    console.log(event.target.value)
    setNewBio(event.target.value)
  } 

  const handleAccessibleChange = (event) => {
    console.log(event.target.value)
    setNewAccessible(event.target.value)
  } 

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const hostsDisplayed = filter
    ? hosts.filter(host => host.country.toLowerCase().includes(filter.toLowerCase()))
    : []

    console.log(hostsDisplayed)

  return (
    <>
      <HostForm 
      addNewHost={addNewHost}
      newName={newName}
      handleNameChange={handleNameChange}
      newCountry={newCountry}
      handleCountryChange={handleCountryChange}
      newCity={newCity}
      handleCityChange={handleCityChange}
      newBio={newBio}
      handleBioChange={handleBioChange}
      newAccessible={newAccessible}
      handleAccessibleChange={handleAccessibleChange} />
      <Filter value={filter} onChange={handleFilterChange} />
      {hostsDisplayed.map(host => 
      <Profile
     name={host.name}
     country={host.country}
     city={host.city}
     bio={host.bio}
     accessible={host.accessible} />)}
    </>
  )
}

export default App
