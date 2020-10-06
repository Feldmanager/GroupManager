const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const GroupHandler = require('./BL/GroupHandler');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/', async (req, res, next) => {
    try{
        let result = await GroupHandler(req.body);
        res.status(200).send(result);
    }
    catch(err){
        res.status(400).send(err.message);
    }
    next();
});

module.exports = router;