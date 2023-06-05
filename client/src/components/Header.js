import React from "react";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Read from "./Read"
import Create from "./Create"
import Delete from './Delete'

function Header() {

    var [action, setAction]= useState(0)
    const[element, setElement] = useState(<Read />)
    
    useEffect(()=>{
        if(action==0){
            setElement(<Read />)
        }
        else if(action==1){
            setElement(<Create />)
        }
        else{
            setElement(<Delete />)
        }
        
    }, [action])

    const navHandler = (int) =>{
        setAction(int)
       
    }
    
  return (
    <>
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">Walang katapusang CRUD</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1" onClick={()=>navHandler(0)}>HOME</Nav.Link>
                <Nav.Link href="#action2" onClick={()=>navHandler(1)}>Create</Nav.Link>
                <Nav.Link href="#action3" onClick={()=>navHandler(2)}>Delete</Nav.Link>
                <Nav.Link href="#" disabled>
                Link
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
       {element}
        
    </>
  );
}

export default Header;