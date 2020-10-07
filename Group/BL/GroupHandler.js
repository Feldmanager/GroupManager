let {SqlHandler, UserInvalidInputError , Validator} = require('commonframework');

const InsertGroup=async (elements)=>
{
    var result;
    Validator(elements);
    var query = `EXEC InsertGroup @TypeId=${parseInt(elements.TypeId)}, @GroupName='${(elements.GroupName).toString()}'`;
    var sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result);
    return result;
}

const DeleteGroup=async (elements)=>
{
    var result;
    Validator(elements);
    var query = `EXEC DeleteGroup @GroupId=${parseInt(elements.groupId)}`;
    var sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result);
    return result;
}

const UpdateGroup=async (elements)=>
{
    var result;
    Validator(elements);
    var query = `EXEC UpdateGroup @GroupId=${parseInt(elements.groupId)}, @GroupName='${elements.groupName.toString()}'`;
    var sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result);
    return result;
}

const InsertRelation=async (elements)=>
{
    let result=[];
    Validator({"groupId":elements.groupId});
    var sqlExecute = new SqlHandler();
    for(obj in elements.userList)
    {
        Validator({obj:obj});
        var query = `EXEC InsertRelation @GroupId=${parseInt(elements.groupId)}, @Username='${elements.userList[obj].toString()}'`;
        result.push(await sqlExecute.Execute(query));
    }
    console.log(result);
    return {result};
}

const DeleteRelation=async (elements)=>
{
    let result=[];
    Validator({"groupId":elements.groupId});
    var sqlExecute = new SqlHandler();
    for(obj in elements.userList)
    {
        Validator({obj:obj});
        var query = `EXEC DeleteRelation @GroupId=${parseInt(elements.groupId)}, @Username='${elements.userList[obj].toString()}'`;
        result.push(await sqlExecute.Execute(query));
    }
    console.log(result);
    return {result};
}

module.exports={InsertGroup,DeleteGroup, UpdateGroup, InsertRelation,DeleteRelation};
