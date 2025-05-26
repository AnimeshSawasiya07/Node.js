import express from "express";

// app :- It is an express application instance
const app = express();


app.set("view engine","ejs")

app.use(express.static("./public"))

app.use((req,res,next)=>{
    console.log("Hello Express.......");
    next()
})

app.use((req,res,next)=>{
    console.log("You are wonderful....");
    next()
})


app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/home",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/contact",(req,res)=>{
   res.render("contact")
  // return res.render("contact.ejs")
})

app.get("/add",(req,res)=>{
    let {a,b} = req.query
    res.send("Addition  : "+(a*1+b*1))
})

app.use((req,res)=>{
    res.send("Requested resouce is not available....")
    
})

app.listen(3000)