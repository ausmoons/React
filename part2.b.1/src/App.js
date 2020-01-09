import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    {id: 1, name: 'Arto Hellas', number: '040-123456' },
    {id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    {id: 3,  name: 'Dan Abramov', number: '12-43-234345' },
    {id: 4,  name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
 
  const search = (event) => {
console.log(event.target.value)
 

   const  result = persons.filter(item => item.name.toLocaleLowerCase().includes(event.target.value))  
   console.log(result.length)

   if(result.length === 0) {
    setPersons(persons)
   }
   else {
    setPersons(result)
   }
   
  
   
  }

  const rows = () => persons.map(person => 
  <div key={person.id}>
       <li>{person.name} {person.phone}</li>
  </div>)



  const addPerson = (event) => {
    event.preventDefault()
    
    const personObject = {
      name: newName,
      id: persons.length + 1,
      phone: newPhone,
    }

    function exist(value) { 
      return value.name === personObject.name; 
    } 

     
      var filtered = persons.filter(exist); 
      if (filtered.length === 1)
      {
        console.log('exist')
        window.alert(`${newName} is already added to phonebook`);
      }
      else
      {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewPhone('')
      }
  }

  const handleNameChange = (event) => {  
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with
      <input    onChange={search} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>         
          name: 
          <input   value={newName} onChange={handleNameChange} />
          </div>
          <div>
          phone: 
          <input   value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
         <ul>
            {rows()}
         </ul>

         
    </div>
  )
}

export default App