const express = require('express');
const app = express();
const Group = require('./Group/GroupRoutes');
const Groups = require('./Groups/GroupsRoutes')
const cors = require('cors')
const {Authorize,ValidateUser}= require('commonframework')

var corsOptions = {
    origin: ['http://localhost:3001',
             'http://10.1.0.19:3001',
             'http://10.1.0.27:3001',
             'http://10.1.0.12:3001',
             'http://10.1.0.17:3001'
  ],
    optionsSuccessStatus: 200
  }

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

app.use(cors(corsOptions));

app.use(ValidateUser)

app.use(Authorize)


app.listen(3000, ()=>{
    console.log("listening");
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
  });

app.use('/Group', Group);
app.use('/Groups', Groups);