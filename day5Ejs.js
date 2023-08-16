const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.set("view engine" , "ejs");


app.get("/",(req,res) => {
    let myString = "<h3>hello world</h3>";
    res.render("indexDay5ejs",{myString});
});

// app.get("/:name",(req,res) => {
//     let {name} = req.params;
//     res.render("index" , {name});
// });


app.listen("3000" ,() => {
    console.log("3000伺服器正在運行");
});