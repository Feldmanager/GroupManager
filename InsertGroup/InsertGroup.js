const express = require('express');
const app = express();
var router = express.Router()


app.listen(3000, ()=>{
    console.log("listennig")
});

app.get('/getter', (req,res)=>{
res.send("fuck");
})

module.exports = router;