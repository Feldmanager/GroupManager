const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const GroupHandler = require('./BL/GroupHandler');
let {UserInvalidInputError} = require('commonframework');


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/', async (req, res, next) => {
    try{
        let result = await GroupHandler.InsertGroup(req.body);
        res.status(200).send(result);
    }
    catch(err){
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }    }
    next();
});

router.delete('/:groupId', async (req, res, next) => {
    try{
        let result = await GroupHandler.DeleteGroup(req.params);
        res.status(200).send(result);
    }
    catch(err){
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }    }
    next();
});

router.put('/:groupId', async (req, res, next) => {
    try{
        let elements = {groupId:req.params.groupId, groupName:req.body.groupName}
        console.log(elements);
        let result = await GroupHandler.UpdateGroup(elements);
        res.status(200).send(result);
    }
    catch(err){
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }    }
    next();
});

router.post('/:groupId/Relation', async (req, res, next) => {
    try{
        let elements = {groupId:req.params.groupId, userList:req.body.userList}
        let result = await GroupHandler.InsertRelation(elements);
        res.status(200).send(result);
    }
    catch(err){
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }    }
    next();
});

router.delete('/:groupId/Relation', async (req, res, next) => {
    try{
        let elements = {groupId:req.params.groupId, userList:req.body.userList}
        let result = await GroupHandler.DeleteRelation(elements);
        res.status(200).send(result);
    }
    catch(err){
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }    }
    next();
});

module.exports = router;