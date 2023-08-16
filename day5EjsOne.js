const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine" , "ejs");

app.get("/",(req,res) => {
    const everbody = [
        { name:"angus",age:"20",weight:"60",hobby:"baseball"},
        { name:"nagi",age:"21",weight:"55",hobby:"game"},
        { name:"wilel",age:"30",weight:"40",hobby:"sleep"},
        { name:"jeson",age:"55",weight:"80",hobby:"eat"},
        { name:"apple",age:"10",weight:"35",hobby:"baseball"},
    ];
    res.render("indexDay5One" , {everbody});
});

app.get("/example",(req,res) => {
    let{name,age} = req.query;
    console.log(req.query);
    console.log(req.body);
    res.render("response1" , { name , age });
});




app.listen(3100,() => {
    console.log("3100伺服器正在運行")
})