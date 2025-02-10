var myexpress=require("express");
var myapp=myexpress();
var port=9006
app.get("/user/:id",(req,res)=>{
res.send('user id', $(req,paramas,id));
});
app.listen(port,()=>{
    console.log("server is running at ${port}:")
});



