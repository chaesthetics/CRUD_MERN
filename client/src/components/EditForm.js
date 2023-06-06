import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect } from 'react';
import axios from 'axios'


function EditForm(props){

    const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    
  };
  const handleShow = () => setShow(true);
 
  
  const [fullname, setFullName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const [userInfo, setUserInfo] = useState([])
  var id=props.id
//   axios.get(`http://localhost:3001/read1/${id}`).then((response)=>{
//     setUserInfo(response.data)
//   })

  console.log(id)

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
              <Form.Label>Fullname{props.id}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Fullname"
                autoFocus
                onChange={event=>setFullName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                autoFocus
                onChange={event=>setAge(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={event=>setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Status"
                autoFocus
                onChange={event=>setStatus(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default EditForm