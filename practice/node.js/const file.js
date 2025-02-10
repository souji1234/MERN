const myfs=reruire("fs");
const data=myfs.readfilesync("CURD/my info.txt","utf-8");
console.log(data);
myfs.readfile("CURD/my info.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);
});
