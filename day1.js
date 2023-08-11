const express = require("express");
const app = express();

//http request,get,post,put,delete

app.get("/",(req,res) =>{
    res.send("歡迎來到網站首頁");
});

app.get("/anotherPage",(req,res)=>{
    res.send("這是另外一頁");
})


//port ,callback
app.listen(3000, ()=> {
    console.log("伺服器正在聆聽port 3000")
})