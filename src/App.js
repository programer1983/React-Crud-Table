import {useState} from "react"
import data from './mock-data.json'
import {nanoid} from "nanoid"
import './App.css';

function App() {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  })

  const handleFormChange = (event) => {
    event.preventDefault()
    const fieldName= event.target.getAttribute('name')
    const fieldValue = event.target.value
    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    }
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Adress</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
          type="text" 
          name="fullName" 
          required="required" 
          placeholder="Enter a name..."
          onChange={handleFormChange}
        />
        <input 
          type="text" 
          name="addres" 
          required="required" 
          placeholder="Enter an addres..."
          onChange={handleFormChange}
        />
        <input 
          type="text" 
          name="phoneNumber" 
          required="required" 
          placeholder="Enter a phone number..."
          onChange={handleFormChange}
        />
      <input 
          type="email" 
          name="email" 
          required="required" 
          placeholder="Enter an email..."
          onChange={handleFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
