const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =  process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//client.사용자 입장에서 api/hello로 접속하면 보여주는 메세지
app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!' });
});

//앱 동작은 5000번 포트로 실행
app.listen(port, () => console.log(`Listening on port ${port}`));