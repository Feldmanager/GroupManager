const express = require('express');
const app = express();
const InsertGroup = require('./InsertGroup/InsertGroup')

app.use('/Group', InsertGroup);