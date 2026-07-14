const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://avanyc:avany25murali@ac-ntafnbk-shard-00-00.s6bk36f.mongodb.net:27017,ac-ntafnbk-shard-00-01.s6bk36f.mongodb.net:27017,ac-ntafnbk-shard-00-02.s6bk36f.mongodb.net:27017/nssappdb?ssl=true&replicaSet=atlas-9ujeqf-shard-0&authSource=admin&appName=Cluster0").then(
    ()=>{
        console.log("mongodb connected")
    }
).catch(
    (error)=>{
console.log(error)
    }
)
const nss=mongoose.model("nss",new mongoose.Schema(
    {
        volunteerID:String,
        fullName:String,
        email:String,
        phone:String,
        dateofBirth:String,
        gender:String,
        bloodGroup:String,
        department:String,
        yearofStudy:String,
        campName:String,
        hours:String,
        address:String,
        unitNumber:String
    }
))

app.post("/add-nss",async(req,res)=>{
    await nss.create(req.body)
    res.json({"status":"success"})
})



app.listen(2000,()=>{
    console.log("server started")
})