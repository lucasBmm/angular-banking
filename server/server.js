const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const requisition = require('./src/controllers/requisiton.json');
const hash = require('./src/middleware/passwordHash');
const jwt = require('jsonwebtoken');
//require('./src/routes/index')(app);
const db = require('./src/config/db');
const port = process.env.port || 3001;

const app = express();

app.use(express.json());

var corsOptions = {
  origin: 'http://localhost:4200',
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', async (req, res, next) => {
  const { account, password } = req.body;

  if (account == 192198 && password == 12345) {
    res.status(200).send({
      success: true,
      message: 'login success',
      id: '12345',
    });
  } else {
    res.status(404).send({
      success: false,
      message: 'User not found',
    });
  }

  // const result = await db.queryUsers(login, password);

  // if (login == result.user_email && password == result.user_password){
  //     const id = result.user_id;
  //     const token = jwt.sign({ id }, process.env.SECRET, {
  //         expiresIn: 300 // expires in 5min
  //       });
  //     res.status(200).send({
  //         "auth": true,
  //         "user": `${login.user_name}`,
  //         "token": `${token}`,
  //     })
  // } else {
  //     res.status(404).send({
  //         "err": "Wrong email or password!"
  //     })
  // }
});

app.post('/register', (req, res) => {
  const data = req.body;
  db.res.status(200).send(data);
});

app.post('/token-verify', (req, res, next) => {
  const { token } = req.body;

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) {
      res.status(400).send({
        auth: false,
      });
    } else {
      res.status(200).send({
        auth: true,
      });
    }
  });
});

app.get('/', (req, res) => {
  return requisition;
});
app.listen(port, () => {
  console.log(`Servidor rodando no http://localhost:${port}`);
});
