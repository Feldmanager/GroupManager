const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const GroupsHandler = require('./BL/GroupsHandler');
const sqlInjectReject = require('sql-inject-reject');


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(sqlInjectReject({ level: 'paranoid' }));


router.get('/GroupByUsername/:userName', async (req, res, next) => {
    try{
        let result = await GroupsHandler.GetGroupsByUserName(req.params);
        res.status(200).send(result);
    }
    catch(err){
        res.status(400).send(err.message);
    }
    next();
});
router.get('/', async (req, res, next) => {
    try{
        let result = await GroupsHandler.GetAllGroups(req.params);
        res.status(200).send(result);
    }
    catch(err){
        res.status(400).send(err.message);
    }
    next();
});
router.get('/GroupsByTypeId/:typeId', async (req, res, next) => {
    try{
        let result = await GroupsHandler.GetGroupsByTypeId(req.params);
        res.status(200).send(result);
    }
    catch(err){
        res.status(400).send(err.message);
    }
    next();
});

router.get('/GroupByGroupId/:groupId', async (req, res, next) => {
    try{
        let result = await GroupsHandler.GetGroupByGroupId(req.params);
        res.status(200).send(result);
    }
    catch(err){
        res.status(400).send(err.message);
    }
    next();
});

module.exports = router;