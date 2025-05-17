import fs from "fs";

console.log("At the start")
fs.writeFile("f1.txt","This is first program of file sytem in js.",(err)=>{
    err?console.log(err):console.log("Operation success")
})
console.log("At the end")