const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors());
const hello = require('./userdata');
dotenv.config();
mongoose.connect(process.env.mongourl).then(()=>{
    console.log('database are connected');
}).catch((err)=>
{
    console.log( err.message);
})
app.use(express.json())
app.post('/datastoredindataBase',async(req,res)=>{
    console.log("react value",req.body);
    
    let a = await hello.create(req.body)
    res.send({message:"data stored successfully",data:a});
})
app.listen(3000, () => {
    console.log('Server is running ')     
})