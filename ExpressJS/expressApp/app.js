import express from "express";

const app = express();

app.set("view engine","ejs")

app.listen(3000,()=>{
    console.log("server started......");
    
})