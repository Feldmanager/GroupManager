const express = require('express');
const app = express();
var router = express.Router()


app.listen(3000, ()=>{
    console.log("listenniggggg")
});

app.post('/Insert', (req,res)=>{
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
        request.query('insert into Groups (TypeId,GroupName) values (${req.body.TypeId}, ${req.body.GroupName})', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});


app.post('/check', (req,res)=>{
    console.log("success");
});

module.exports = router;