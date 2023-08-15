const express =require("express");
const app = express();

//midleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(express.static("public"));//express 預設是不能直接傳像是css等靜態文件
//day4
app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/index.html");
});










//
app.get("/fruit",(req,res) => {
    res.send("歡迎來到水果頁面");
});

app.get("/fruit/:someFruit",(req,res) => {
    res.send(`歡迎來到${req.params.someFruit}頁面`);
});

app.get("/example",(req,res) => {
    res.sendFile(__dirname + "/example.html");
});

app.get("/formhandling",(req,res) => {
    return  res.send(`已收到表單,名稱為${req.query.name},年齡為${req.query.age}`);
});

app.get("/formhandling2",(req,res) => {
    let{email,password} = req.body;
    res.send(`已收到表單,email為${email}`);
});




//404
app.get("*",(req,res) => {
    res.status(404).send("錯誤頁面");
    // res.send("錯誤頁面");
});




app.listen(3000,() => {
    console.log("3000伺服器整載運行");
});