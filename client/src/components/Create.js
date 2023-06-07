import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Create(){

    const[newFullName, setNewFullName] = useState("")
    const[newAge, setNewAge] = useState(0)
    const[newEmail, setNewEmail] = useState("")
    const[newStatus, setNewStatus] = useState("")

    const saveData = () =>{
        axios.post('http://localhost:3001/insert',{
            fullname: newFullName,
            age: newAge,
            email: newEmail,
            status: newStatus,
        })
        window.location.reload(true)
    }    
    return(
        <>
            <form className='form'>
                <div class="form-group">
                    <label for="exampleInputEmail1">FullName</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter fullname"onChange={e=>setNewFullName(e.target.value)}/>
                    <br/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Age</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter age"onChange={e=>setNewAge(e.target.value)}/>
                   <br />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"onChange={e=>setNewEmail(e.target.value)}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <div class="form-group">
                    <label for="exampleInputPassword1">Status</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter status"onChange={e=>setNewStatus(e.target.value)}/>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Verified input</label>
                </div><br/>
                <button type="submit" class="btn btn-primary" onClick={saveData}>Add user</button>
                </form>
        </>
    )
}


export default Create