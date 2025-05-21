import http from "http";

// request :--- IncomingMessage
// response :---ServerResponse

let server = http.createServer((request,reponse)=>{
        reponse.write("Hello client how are you ?")
        reponse.end()
});

server.listen(3000,()=>{
    console.log("server started.....");
    
});