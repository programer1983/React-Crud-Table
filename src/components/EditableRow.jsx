

const EditableRow = ({editFormData, handleEditFormChange}) => {
  return (
    <tr>
        <td>
            <input 
               type="text" 
               required="required"  
               name="fullName"
               placeholder="Enter a name..."
               value={editFormData.fullName}
               onChange={handleEditFormChange}
            />
        </td>
        <td>
            <input 
               type="text" 
               required="required"  
               name="addres"
               placeholder="Enter an addres..."
               value={editFormData.addres}
               onChange={handleEditFormChange}
            />
        </td>
        <td>
            <input 
               type="text" 
               required="required"  
               name="phoneNumber"
               placeholder="Enter a phone number..."
               value={editFormData.phoneNumber}
               onChange={handleEditFormChange}
            />
        </td>
        <td>
            <input 
               type="email" 
               required="required"  
               name="email"
               placeholder="Enter an email..."
               value={editFormData.email}
               onChange={handleEditFormChange}
            />
        </td>
        <td>
            <button type="submit">Save</button>
        </td>
    </tr>
  )
}

export default EditableRow