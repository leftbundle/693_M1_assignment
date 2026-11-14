import express from 'express'
import path from 'path'

//CREATE EXPRESS APP
const app=express();

//SET THE PUBLIC FOLDER AS A STATIC FOLDER
app.use(express.static("public"));

//GET THE HOME ROUTE ANS LOAD INDEX.HTML
app.get("/", (req,res)=>{
    res.sendFile(path.resolve("public/index.html"));
});

//LISTEN ON PORT 5001
app.listen(5001,()=>{
    console.log("Server is running on port 5001");
});