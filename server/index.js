const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express('')

app.use(express.json())
app.use(cors())

const PORT = 3001

const userModel = require('./models/User')
mongoose.connect("mongodb+srv://aurieljames11:admin123@crudmern.gci6eam.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
});

app.post("/insert", async(req, res)=>{

    const fullname = req.body.fullname
    const age = req.body.age
    const email = req.body.email
    const status = req.body.status

    const user = new userModel({fullName: fullname, age: age, email: email, status: status});
    try{
        await user.save()
        res.send('data inserted')
    }catch(err){
        console.log(err)
    }
})

app.get('/read', async (req, res)=>{
    userModel.find({}).then((result)=>res.send(result))
})

app.listen(PORT, ()=>{
    console.log(`Server is listening to port ${PORT}`)
})