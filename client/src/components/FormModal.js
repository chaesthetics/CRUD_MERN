import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect } from 'react';
import axios from 'axios'

function FormModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    
  };
  const handleShow = () => setShow(true);
 
  
  const [fullname, setFullName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const addToList = () =>{
    axios.post('http://localhost:3001/insert',{
      fullname: fullname,
      age: age,
      email: email,
      status: status,
    })
    window.location.reload(true)
  }
  
  return (
    <>
    <Button variant="success" onClick={handleShow} className='userHandler'>Add User</Button>  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fullname</Form.Label>
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
          <Button variant="primary" onClick={addToList}>
            Save User Info
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal