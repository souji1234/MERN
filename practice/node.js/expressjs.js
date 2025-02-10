var myexpress=require("express");
var app=myexpress();
var port=9006
app.get("about",(req,res)=>{
res.send("about data will be excuted");
});
app.listen(port,()=>{
    console.log("running on port 9006")
});



