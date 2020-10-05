const express = require('express');
const app = express();
const InsertGroup = require('./InsertGroup/InsertGroup')

app.listen(3000, ()=>{
    console.log("listenniggggg")
});

app.use('/Group', InsertGroup);