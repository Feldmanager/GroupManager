const express = require('C:\Code\GroupManager\node_modules\express');
const app = express();
var router = express.Router()


app.listen(3000, ()=>{
    console.log("listennig")
});

module.exports=router;