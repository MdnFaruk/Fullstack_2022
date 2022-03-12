import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import personServices from './services/personServices';
import Notification from './components/Notification';
import { useState, useEffect } from 'react';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')
  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  const getAllPersons = () => personServices.getAll()
  .then(personList => {
    setPersons(personList)
  })

  useEffect(getAllPersons, [])

  const addName = (event) => {
    event.preventDefault();

    if(persons.map(person => person.name).includes(newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with new one`)){
        let personId = persons.filter(person => person.name === newName)[0].id
        
        personServices.update(personId,{name:newName,number:newNumber})
        .then(setMessage(`Changed Number of ${newName}`),
        setTimeout(() => { setMessage(null)}, 5000))
        .then(getAllPersons)
        .catch(error => {
          setMessage(`Information of ${newName} has already been removed from server`)
          setIsError(true)
          setTimeout(() => { setMessage(null)}, 5000)
          setPersons(persons.filter(person => person.id !== personId))
          console.log(error)
        })
      }
    } else {
      personServices.create({name:newName,number:newNumber})
        .then(returnedPerson => {
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setPersons([...persons,returnedPerson])
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const deleteName = (event) => {
    event.preventDefault()
    const id = event.target.value
    const name = event.target.name
     if(window.confirm(`Delete ${name}`)) {
      personServices.deleteId(id)
      .then(getAllPersons)
     }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterName = (event) => {
    setFilteredName(event.target.value)
  }
  const getFilterName = persons.filter(person => person.name.toLowerCase().includes(filteredName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isError={isError}/>
      <Filter filteredName={filteredName} handleFilterName={handleFilterName}/>
      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <ul>
        <Persons getFilterName={getFilterName}  deleteName={deleteName}/>
      </ul>
    </div>
  )
}

export default App