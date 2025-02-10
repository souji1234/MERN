var myexpress=require("express");
var app=myexpress();
var port=9006
app.get("/",(req,res)=>{
res.send("hello world form expressjs");
});
app.listen(port,()=>{
    console.log("running on port 9006")
});

