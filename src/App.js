import {useState, Fragment} from "react"
import data from './mock-data.json'
import {nanoid} from "nanoid"
import './App.css';
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

function App() {
  const [contacts, setContacts] = useState(data)
  const [editContactId, setEditContactId] = useState(null)
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  })

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  })

  const handleAddFormChange = (event) => {
    event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value
    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value
    const newFormData = {...editFormData}
    newFormData[fieldName] = fieldValue
    setEditFormData(newFormData)
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

  const handleEditFormSubmit = (event) => {
    event.preventDefault()
    const editeContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }
    const newContact = [...contacts]
    const index = contacts.findIndex((contact) => contact.id === editContactId)
    newContact[index] = editeContact
    setContacts(newContact)
    setEditContactId(null)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault()
    setEditContactId(contact.id)
    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email, 
    }
    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  const nandleDeleteClick = (contactId) => {
    const newContacts = [...contacts]
    const index = contacts.filter((contact) => contact.id == contactId)
    newContacts.splice(index, 1)
    setContacts(newContacts)
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Adress</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment>
              {editContactId === contact.id ? (
                <EditableRow 
                  editFormData={editFormData} 
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyRow 
                contact={contact}
                handleEditClick={handleEditClick}
                nandleDeleteClick={nandleDeleteClick}
            />)}
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>
      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
          type="text" 
          name="fullName" 
          required="required" 
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input 
          type="text" 
          name="addres" 
          required="required" 
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input 
          type="text" 
          name="phoneNumber" 
          required="required" 
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
      <input 
          type="email" 
          name="email" 
          required="required" 
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
