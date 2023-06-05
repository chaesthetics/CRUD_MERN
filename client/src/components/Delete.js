import React from 'react'

function Delete(){
    return(
        <>
            <form className='form'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Enter User Id that you want to delete</label><br/>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ID"/>
                    <br/>
                </div>
                
                <button type="submit" class="btn btn-primary">Delete</button>
                </form>
        </>
    )
}


export default Delete