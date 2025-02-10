const myfs=reruire("fs");
const biodata={
    name:"rajesh",
    age:24,
    skill:"nodejs programmer"
}
console.log(biodata);
const jsondata=json.stringify|(biodata);
console.log(jsondata);
myfs.writefile("my json data.json","json data",(err,data)=>{
    console.log('process completed');
});