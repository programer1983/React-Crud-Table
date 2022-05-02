import {useState} from "react"
import data from './mock-data.json'
import './App.css';

function App() {
  const [contacts, setContacts] = useState(data)


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
    </div>
  );
}

export default App;
