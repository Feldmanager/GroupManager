const express = require('express');
const app = express();
const Group = require('./Group/GroupRoutes');
const Groups = require('./Groups/GroupsRoutes')
const cors = require('cors')
const {Authorize,ValidateUser, UserInvalidInputError}= require('commonframework')
const {corsOptions} = require('./Common/config')
const fs = require('fs');
const https = require('https');
const privateKey  = fs.readFileSync('/run/secrets/server.key', 'utf8');
const certificate = fs.readFileSync('/run/secrets/server.crt', 'utf8');

let credentials = {key: privateKey, cert: certificate};

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

function errHandler(err, req, res, next) {
  if (err) {
      if (err instanceof UserInvalidInputError){
          console.log(err)
          res.status(400).send(err.message)
      }else{
        console.log(err)
          res.status(500).send(err.message)
      }
  }
}
app.use(errHandler);

let httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000, ()=>{
    console.log("listening");
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
  });

app.use('/Group', Group);
app.use('/Groups', Groups);
