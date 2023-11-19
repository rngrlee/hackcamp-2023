import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Filter from './components/Filter'
import hostService from './services/hostService'

function App() {
  const [hosts, setHosts] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    hostService
      .getAll()
      .then(initialHosts => {
        console.log('promise fulfilled')
        setHosts(initialHosts)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const hostsDisplayed = filter
    ? hosts.filter(host => host.country.toLowerCase().includes(filter.toLowerCase()))
    : hosts

  return (
    <>
      <Filter value={filter} onChange={handleFilterChange} />
      {hostsDisplayed.map(profile => 
      <Profile
     name='Ranger'
     country='Canada'
     city='Vancouver'
     bio='Student, etc.'
     accessible='yes' />)}
    </>
  )
}

export default App
