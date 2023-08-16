const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("歡迎來到首頁88888");
});

app.get("/example",(req,res) => {
    // res.send("<h1>這是一個h1標籤</h1>");
   res.sendFile(__dirname + "/example.html");
});
app.get("/example2",(req,res) => {
    let obj = {
        title : "Nagi Design",
        website :"udemy",
    }

    res.json(obj);
});




app.get("/example3",(req,res) => {
    res.redirect("/actualExample");//重新導向到/actualExample
});

app.get("*",(req,res) => {
    res.send("404");
});

app.get("/actualExample",(req,res) => {
    res.send("真正的資源");
});


//day3



//port ,callback
app.listen(3100, ()=> {
    console.log("伺服器正在聆聽port 3100")
})
