const express = require("express");
const dotenv = require("dotenv");
const chats  = require("./data/data")
dotenv.config();
// console.log(chats);


const app = express();

app.get("/" , (req,res) =>{
    res.send("welcome to home")
})

app.get("/api/chat" ,(req,res) =>{
    res.json({chats})
});

app.get("/api/chat/:id" ,(req,res) =>{
    // const {id} = req.params.id;
    const chat = chats.find((c) => c._id == req.params.id);
    console.log();
    
    res.json({chat})
})

const port = process.env.PORT || 4040;
app.listen(port ,()=>{
    console.log(`server is listing at port ${port}`);
    
})