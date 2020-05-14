const fs = require('fs'); //file에 접근할 수 있는 라이브러리.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =  process.env.PORT || 5000;

app.use(bodyParser.json()); //react에서는 데이터를 json 데이터형식로 주고 받음
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json'); //database.json읽어오기.
const conf = JSON.parse(data);//해당 환경설정 데이터를 파싱해서 가져옴.
const mysql = require('mysql'); //mysql라이브러리 불러와서 담음.

//실제로 연결과 관련된 변수
//connection 내부적으로 속성값을 입력받아서 실제로 mysql에연결한 객체를 다룰 수 있음.
const connection = mysql.createConnection({ 
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})
connection.connect(); //연결수행

//client.사용자 입장에서 경로에 접속하면 db에 접근하여 쿼리날림. 
app.get('/api/customers', (req, res) => {
   connection.query(
       "SELECT * FROM CUSTOMER", //데이터를 가져와서 rows변수로 처리.
       (err, rows, fields) => {
           res.send(rows); //사용자에게 rows를 보여줌.
       }
   )
});

//앱 동작은 5000번 포트로 실행
app.listen(port, () => console.log(`Listening on port ${port}`));