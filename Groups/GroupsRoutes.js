const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const GroupsHandler = require('./BL/GroupsHandler');
let {UserInvalidInputError, Permit} = require('commonframework');


//#region middleware
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
//#endregion

//#region routes
router.get('/GroupByUsername/:userName', async (req, res, next) => {

    try{
        console.log(req.headers.cookies);
        console.log(req.body)
        let result = await GroupsHandler.GetGroupsByUserName(req.params);
        res.status(200).send(result);
    }
    catch(err){
        res.status(400).send(err.message);
    }
    next();
});
router.get('/',Permit('Admin', 'Makas'), async (req, res, next) => {
    try{
        let result;
        console.log(req.role)
            if(req.role==='Admin'){
                result = await GroupsHandler.GetAllGroups(req.params);
            }
            else if(req.role==='Makas')
            {
                result = await GroupsHandler.GetGroupsByUserName({user:req.user});
            }
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
//#endregion


module.exports = router;