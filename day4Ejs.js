const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
/*
 如果先寫一個
 app.set("view engine" , "ejs")
 res.render就可以不用加文件類型
 如
 res.render("index.ejs") => res.render("index")

*/
app.set("view engine" , "ejs");

app.get("/",(req,res) => {
    res.render("index");
});
app.get("/:name",(req,res) => {
    let {name} = req.params
    /*
    在js 中，出現Object 屬性與variable 相同的狀況可以簡寫
    res.render("index" , {name : name}); => res.render("index" , {name});
    */
    res.render("index" , { name });

});

app.listen("3100",() => {
    console.log("伺服器3100正在運行");
});