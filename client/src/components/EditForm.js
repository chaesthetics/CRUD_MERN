import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

function EditForm(props){

    const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => setShow(true);
  
  const [fullname, setFullName] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const [newFullname, setNewFullName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [newEmail, setNewEmail] = useState("")
  const [newStatus, setNewStatus] = useState("")

  const [userInfo, setUserInfo] = useState([])
  var id = props.id

    axios.get(`http://localhost:3001/read1/${id}`).then((response)=>{
      setUserInfo(response.data)
      setFullName(userInfo.fullName)
      setAge(userInfo.age)
      setEmail(userInfo.email)
      setStatus(userInfo.status)
  })

  const editHandler = () =>{
    var fullnameIn
    var ageIn
    var emailIn
    var statusIn

    if(newFullname!=""){
      fullnameIn = newFullname
    }
    else{
      fullnameIn = fullname
    }

    if(newAge!=0){
      ageIn = newAge
    }
    else{
      ageIn = age
    }

    if(newEmail!=""){
      emailIn = newEmail
    }
    else{
      emailIn = email
    }

    if(newStatus!=""){
      statusIn = newStatus
    }
    else{
      statusIn = status
    }

    console.log(fullnameIn)
    console.log(ageIn)
    console.log(emailIn)
    console.log(statusIn)

    axios.put(`http://localhost:3001/edit/${id}`,{
      fullname: fullnameIn,
      age: ageIn,
      email: emailIn,
      status: statusIn,
    })
    window.location.reload(true)
  } 
  
    return(
        <>
          <Button variant="warning" onClick={handleShow} className='userHandler'>Edit User</Button>  
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Edit Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Fullname"
                autoFocus
                defaultValue={fullname}
                onChange={event=>setNewFullName(event.target.value)}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                autoFocus
                defaultValue={age}
                onChange={event=>setNewAge(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={email}
                onChange={event=>setNewEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Status"
                autoFocus
                defaultValue={status}
                onChange={event=>setNewStatus(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default EditForm