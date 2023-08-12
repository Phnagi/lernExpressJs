const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("歡迎來到首頁88888");
});

app.get("/example",(req,res) => {
    res.send("<h1>這是一個h1標籤</h1>");
});


//port ,callback
app.listen(3000, ()=> {
    console.log("伺服器正在聆聽port 3000")
})

