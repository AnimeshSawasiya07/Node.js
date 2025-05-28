import express from "express";
import session from "express-session";
import IndexRouter from "./routes/index.route.js"
import UserRouter from "./routes/user.route.js"
import bodyParser from "body-parser"

const app = express();

app.set("view engine", "ejs")
app.use(session({
    secret: "anihbcfhshdh",
    resave: false,
    saveUninitialized: true
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", IndexRouter)
app.use("/user", UserRouter)

app.listen(3000, () => {
    console.log("server started......");

})