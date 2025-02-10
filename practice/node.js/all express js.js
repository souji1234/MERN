var myexpress=require("express");
var app=myexpress();
var port=9006
app.get("/",(req,res)=>{
res.send("hello world form expressjs");
});
app.get("about",(req,res)=>{
    res.send("about data will be excuted");
    });
    app.get("contact",(req,res)=>{
        res.send("contact data will be excuted");
        });
app.listen(port,()=>{
    console.log("running on port 9006")
});


