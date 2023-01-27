const express = require("express"); //express 모듈 추출
const app = express(); //서버 생성
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수

const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2"); // mysql 모듈 사용

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : ", //mysql의 password
    database : "carrot", //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('HELLO WORLD!')
})

app.post("/idplz", (req,res)=>{
    const test = req.body.test;
    // console.log(req.body);
    connection.query("INSERT INTO product (pname) values ('이예일')",[test],
    function(err,rows,fields){
        if(err){
            console.log("실패");
            // console.log(err);
        }else{
            console.log("성공");
            // console.log(rows);
        };
    });

    
});

app.post("/callbody", (req,res)=>{
    connection.query("SELECT * FROM product",
    function(err,rows,fields){
        if(err){
            console.log("불러오기 실패");
        }else{
            console.log("불러오기 성공");
            console.log({rows});
            res.send(rows);
        }
    })
})



app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})
