let {SqlHandler, UserInvalidInputError , Validator} = require('commonframework');


const GetGroupsByUserName=async (elements)=>
{
    let result;
    Validator(elements);
    let query = `EXEC GetGroupsByUserName @UserName='${(elements.userName).toString()}'`;
    let sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result.recordset);
    return result.recordset;
    
}

const GetAllGroups = async ()=>   
{
    let result;
    let query=`EXEC GetAllGroups`;
    let sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result.recordset);
    return result.recordset;

}

const GetGroupsByTypeId = async (elements)=>
{
    let result;
    Validator(elements);
    let query=`EXEC GetGroupsByTypeId @TypeId=${(elements.typeId)}`;
    let sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result.recordset);
    return result.recordset;
}

const GetGroupByGroupId = async (elements)=>
{
    let result;
    Validator(elements);
    let query=`EXEC GetGroupsByGroupId @GroupId=${(elements.groupId)}`;
    let sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result.recordset);
    return result.recordset;
}

module.exports={GetGroupsByUserName, GetAllGroups, GetGroupsByTypeId, GetGroupByGroupId};
