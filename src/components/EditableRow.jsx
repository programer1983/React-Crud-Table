

const EditableRow = () => {
  return (
    <tr>
        <td>
            <input 
               type="text" 
               required="required"  
               name="fullName"
               placeholder="Enter a name..."
            />
        </td>
        <td>
            <input 
               type="text" 
               required="required"  
               name="addres"
               placeholder="Enter an addres..."
            />
        </td>
        <td>
            <input 
               type="text" 
               required="required"  
               name="phoneNumber"
               placeholder="Enter a phone number..."
            />
        </td>
        <td>
            <input 
               type="email" 
               required="required"  
               name="email"
               placeholder="Enter an email..."
            />
        </td>
    </tr>
  )
}

export default EditableRow