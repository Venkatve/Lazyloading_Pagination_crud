
import React, { useEffect, useState } from 'react';
import axios from "axios";

function Crud() {
  const [item, setItem] = useState([]);
  const [inputData, setInputData] = useState({
    name: "",
    email: ""
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setItem(res.data))
      .catch(err => console.log(err));
  }, []);

  const postUser = () => {
    if (editingId) {
     
      axios.put(`https://jsonplaceholder.typicode.com/users/${editingId}`, inputData)
        .then(res => {
          setItem(item.map(user => (user.id === editingId ? res.data : user)))
          
          setEditingId(null);
        })
        .then(res=>alert("Data Updated] Successfully"))
        .catch((error)=>console.log(error))
    } else {
     
      axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then(res => setItem([...item, res.data]))
        .then(res=>alert("Data Posted Successfully"))
        .catch((error)=>console.log(error))
 
    }
    setInputData({ name: "", email: "" });
  };

  const editUser = (id) => {
    const userToEdit = item.find(user => user.id === id);
    setInputData({ name: userToEdit.name, email: userToEdit.email });
    setEditingId(id);
  };

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => setItem(item.filter(user => user.id !== id)))
      .then(res=>alert("Data Deleted Successfully"))
        .catch((error)=>console.log(error))
  };

  return (
    <div className="container mt-5">
      <h3 className='d-flex align-item-center justify-content-center m-5'>Create & Update</h3>
      <div className='d-flex align-item-center justify-content-center m-5'>
        
        <label>Name</label>
        <input
          type='text'
          name="name"
          value={inputData.name}
          onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
        />

        <label>Email</label>
        <input
          type='email'
          name="email"
          value={inputData.email}
          onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
        />

        <button onClick={postUser}>{editingId ? "Update" : "Post"}</button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {item.map(e => (
            <tr key={e.id}>
              {/* <td>{e.id}</td> */}
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>
                <button className='btn btn-secondary me-2' onClick={() => editUser(e.id)}>Edit</button>
                <button className='btn btn-danger' onClick={() => deleteUser(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Crud;
