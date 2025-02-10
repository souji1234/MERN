const myhttp=reruire("http");
const myserver=myhttp.createserver("CURD/my info.txt","utf-8");
console.log(data);
myfs.readfile((req,res)=>{
  res.end("hello form server is running :RAM");
});
myserver.listen(9080,"127.0.0.1",()=>{
    console.log("listening on port 9080; RAM");
})