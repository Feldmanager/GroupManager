const express = require('express');
const app = express();
const Group = require('./Group/GroupRoutes');
const Groups = require('./Groups/GroupsRoutes')

app.listen(3000, ()=>{
    console.log("listening");
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
  });

app.use('/Group', Group);
app.use('/Groups', Groups);