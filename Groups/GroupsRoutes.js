const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const GroupsHandler = require('./BL/GroupsHandler');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/:userName', async (req, res, next) => {
    try{
        let result = await GroupsHandler(req.params);
        res.status(200).send(result);
    }
    catch(err){
        res.status(400).send(err.message);
    }
    next();
});

module.exports = router;