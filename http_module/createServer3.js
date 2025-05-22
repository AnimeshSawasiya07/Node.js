import http from "http";
import url from "url"

let server = http.createServer((request,response)=>{

    let parsedUrl = url.parse(request.url,true)
    //console.log(parsedUrl);
    
    //console.log(parsedUrl.pathname);
    
   if(request.url=="/" || request.url=="/home"){
    response.write("Home page");
    response.end()
   }
   else if(parsedUrl.pathname=="/add"){
    let a = parsedUrl.query.a*1
    let b = parseInt(parsedUrl.query.b)
    response.write("Addition :"+(a+b) );
    response.end()
   }
  
});

server.listen(3000,()=>{
    console.log("server started.....");
    //console.log(request.method);
    
});