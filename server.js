const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =  process.env.PORT || 5000;

app.use(bodyParser.json()); //react에서는 데이터를 json 데이터형식로 주고 받음
app.use(bodyParser.urlencoded({ extended: true }));

//client.사용자 입장에서 경로에 접속하면 반환하는 제이슨 형식
app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id':'1',
          'image':'https://placeimg.com/64/64/1',
          'name': 'Park Seolyeong',
          'birthday':'941005',
          'gender':'female',
          'job':'developer'
        },
        {
          'id':'2',
          'image':'https://placeimg.com/64/64/2',
          'name': 'Lee Sangheon',
          'birthday':'940131',
          'gender':'male',
          'job':'developer'
        },
        {
        'id':'3',
        'image':'https://placeimg.com/64/64/3',
        'name': 'Siru',
        'birthday':'190406',
        'gender':'male',
        'job':'CUTE'
        }
      ]);
});

//앱 동작은 5000번 포트로 실행
app.listen(port, () => console.log(`Listening on port ${port}`));