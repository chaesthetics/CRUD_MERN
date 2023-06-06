import React, { useState } from 'react'
import axios from 'axios'
function Delete(){

    const[id, setId]= useState("")
    
    const deleteHandler = () =>{
        axios.delete(`http://localhost:3001/delete/${id}`)
        window.location.reload(true)
    }
    return(
        <>
            <form className='form'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Enter User Id that you want to delete</label><br/>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ID" onChange={e=>setId(e.target.value)}/>
                    <br/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={deleteHandler}>Delete</button>
                </form>
        </>
    )
}


export default Delete