import express from "express";
import cors from "cors"
import fs from "fs"
import dotenv from "dotenv";



dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())

// fetch question from backend
app.get("/api/question", (req,res)=>{
    fs.readFile("./questions.json","utf8", (err,data)=>{
        if(err){
            return res.status(500).send({message: "faild to load question "})
        }
        const questions = JSON.parse(data)
        res.status(200).json({success:true,questions})
    })
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server running on the port ${PORT}`)
})


