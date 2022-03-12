import Filter from './components/Filter';
import Countries from './components/Countries';
import { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filteredCountry, setFilteredCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterCountry = (event) => {
    setFilteredCountry(event.target.value)
  }
  const getFilterCountry = countries.filter(country => country.name.common.toLowerCase().includes(filteredCountry.toLowerCase()))

  return (
    <div>
      <Filter filteredCountry={filteredCountry} handleFilterCountry={handleFilterCountry}/>
      <Countries getFilterCountry={getFilterCountry} filteredCountry={filteredCountry} setFilteredCountry={setFilteredCountry}/>
      
    </div>
  )
}

export default App