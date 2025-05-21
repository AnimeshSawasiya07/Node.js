import http from "http";

// request :--- IncomingMessage
// response :---ServerResponse

let server = http.createServer((request,response)=>{

   if(request.url=="/" || request.url=="/home"){
    response.write("Home page");
    response.end()
   }
   else if(request.url=="/about"){
    response.write("About page");
    response.end()
   }
   else if(request.url=="/contact"){
    response.write("Contact page");
    response.end()
   }
});

server.listen(3000,()=>{
    console.log("server started.....");
    //console.log(request.method);
    
});