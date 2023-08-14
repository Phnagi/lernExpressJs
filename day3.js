const express = require("express");
const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended:true}));


//
//middleware

app.use((req,res,next)=>{
    console.log("正在經過middleware")
    next();//沒有next就會沒有辦法responese給客戶端會讓客戶端停擺
})
app.use((req,res,next) =>{
    console.log("正在經過middleware2");
    next();
})


//middleware應用
/*

    app.use((req,res,next) =>{
       req.authentciate == false {
            res.send("無法進入網頁，請先登入")
       }else{
            next();
       }

    })

*/ 
//

app.get("/",(req,res) => {
    res.send("歡迎來到首頁88888");
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



app.get("/actualExample",(req,res) => {
    res.send("真正的資源");
});


//day3

app.get("/fruit",(req,res) => {
    res.send("歡迎來到水果頁面");
});

app.get("/fruit/:someFruit",(req,res) => {
    res.send("歡迎來到" + req.params.someFruit + "頁面");
    console.log(req.params);
});

app.get("/example",(req,res) => {
    // res.send("<h1>這是一個h1標籤</h1>");
   res.sendFile(__dirname + "/example.html");
});

app.get("/formhandling" ,(req,res) => {
    console.log(req.query);
    res.send(`已收到表單,名稱為${req.query.name},年齡為${req.query.age}`);
});


app.post("/formhandling2",(req,res) => {
    console.log(req.body);
    let{email,password} = req.body;
    res.send(`已收到表單,email為${email}`);
});



//
app.get("*",(req,res) => {
    res.send("404");
});
//port ,callback
app.listen(3000, ()=> {
    console.log("伺服器正在聆聽port 3000")
});
