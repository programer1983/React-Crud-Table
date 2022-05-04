

const ReadOnlyRow = ({contact, handleEditClick, nandleDeleteClick}) => {
  return (
    <tr>
    <td>{contact.fullName}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
    <td>{contact.email}</td>
    <td>
      <button 
        type="button" 
        onClick={(event) => handleEditClick(event, contact)}>
          Edit
      </button>
      <button 
        type="button" 
        onClick={() => nandleDeleteClick(contact.id)}>
          Delete
      </button>
    </td>
  </tr>
  )
}

export default ReadOnlyRow