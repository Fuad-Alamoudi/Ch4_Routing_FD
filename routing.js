//require the File System module
const fs = require('fs');
//require the URL module
const url =require('url');

//handel Request file 
function handelrequest(file_path,res){
    fs.readFile(file_path,"UTF-8",(err,html)=>{
        if(err){
            res.end('file have error')
        }else{
            res.end(html)
        }
    });
}
//Routing url
function routing(req,res){
    
        const full_url = url.parse(req.url);
        const path = full_url.pathname;
        const query = full_url.query;
        if(path=== "/admin" && query === "role=admin" ){
            handelrequest('admin.html',res);
        }
        else if(path=== "/"){
            handelrequest('index.html',res);
        }
        else if(path=== "/blog"){
            handelrequest('blog.html',res);
        }
        else{
            handelrequest('notfound.html',res);
        }
        // switch(path){
        //     case '/':
        //         handelrequest('index.html',res);
        //         break;
        //     case '/any':
        //         handelrequest('blog.html',res);
        //         break;
        //     case '/user':
        //         res.end("user Pages");
        //         break;
        //     default:
        //         handelrequest('notfound.html',res);
        //         break;
        // }
        
}
module.exports = routing;