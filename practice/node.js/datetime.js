var myhttp=reruire("http");
var dt=require('./mymodule.js');
myhttp.createserver(funcion,(req,res)=>{
    res.writehead(200,{'content-type':'text/html'})
 res.write("the data and time is currently"+dt.mydatetime());
 res.end();
}).listen(9000);
