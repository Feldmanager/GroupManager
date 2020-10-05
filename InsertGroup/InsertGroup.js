const express = require('express');
var router = express.Router()
var bodyParser = require('body-parser')


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.post('/Insert', (req,res)=>{
    var sql = require("mssql");
 
    // config for your database
    var config = {
        user: 'feldmanager',
        password: 'littlecitizen1!',
        server: '10.1.0.117', 
        database: 'feldmanager' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query(`INSERT INTO Groups (TypeId,GroupName) VALUES (${parseInt(req.body.TypeId)}, ${(req.body.GroupName).toString()})`, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});


module.exports = router;