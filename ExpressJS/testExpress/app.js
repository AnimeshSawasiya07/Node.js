import express from "express";

// app :- It is an express application instance
const app = express();

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/contact",(req,res)=>{
   res.render("contact")
})

app.listen(3000)