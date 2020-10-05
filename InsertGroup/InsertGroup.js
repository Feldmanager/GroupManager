const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const queryExecuter = require('./DAL/queryExecuter');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/Insert', (req,res)=>{
var query = `EXEC InsertGroup @TypeId=${parseInt(req.body.TypeId)}, @GroupName='${(req.body.GroupName).toString()}'`;
queryExecuter(query,res);
});

module.exports = router;