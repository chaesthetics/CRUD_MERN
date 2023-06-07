import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import FormModal from "./FormModal"
import axios from 'axios'
import EditForm from './EditForm'
function Read(){
   
    const[userList, setUserList] = useState([])
    
    useEffect(()=>{
      axios.get('http://localhost:3001/read').then((response)=>{
        setUserList(response.data)
      })
    }, [])

    const deleteUser = (id) =>{
      axios.delete(`http://localhost:3001/delete/${id}`)
      window.location.reload(true)
    }
    
    const editHandler = (id) =>{
      console.log(id)
    }
    
    return(
        <>        
        <div className="myTable">
        <FormModal />
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Fullname</th>
          <th>Age</th>
          <th>Email</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((data,key)=>{
          return <tr>
              <td>{data._id}</td>
              <td>{data.fullName}</td>
              <td>{data.age}</td>
              <td>{data.email}</td>
              <td>{data.status}</td>
              <td><EditForm id={data._id} fullname={data.fullName} age={data.age} email={data.email} status={data.status} onClick={()=>editHandler(data._id)}/> <Button variant="danger" onClick={()=>deleteUser(data._id)}>Delete</Button></td>
            </tr>
        })}
      </tbody>
    </Table>
    </div>
    <Button variant="primary" className="addme" href="https://facebook.com/aurieljames11">Add me</Button>
        </>
    )
}

export default Read