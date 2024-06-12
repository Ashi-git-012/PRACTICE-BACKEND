require('dotenv').config();

const express = require('express');
const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    res.send("Hello");
})
app.get("/login", (req,res)=>{
    res.send('<h1>Hi you are at Login page!</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Hi there my port is ${process.env.PORT}`);
})