import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import FormModal from "./FormModal"
import axios from 'axios'
function Read(){
   
    const[userList, setUserList] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3001/read').then((response)=>{
        setUserList(response.data)
      })
    }, [])

    return(
        <>        
        <div className="myTable">
        <FormModal />
        <Table striped bordered hover>
      <thead>
        <tr>
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
              <td>{data.fullName}</td>
              <td>{data.age}</td>
              <td>{data.email}</td>
              <td>{data.status}</td>
              <td><Button variant="warning">Edit</Button> <Button variant="danger">Delete</Button></td>
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