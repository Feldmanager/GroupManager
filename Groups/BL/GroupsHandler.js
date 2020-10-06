const val = require('../../Common/Validation')
const SqlHandler = require('../../DAL/SqlHandler');

const GetGroupsByUserName=async (elements)=>
{
    var result;
    val(elements);
    var query = `EXEC GetGroupsByUserName @UserName='${(elements.userName).toString()}'`;
    var sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result.recordset);
    return result.recordset;
}

const GetAllGroups = async ()=>
{
    var result;
    var query=`EXEC GetAllGroups`;
    var sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result.recordset);
    return result.recordset;

}

const GetGroupsByTypeId = async (elements)=>
{
    var result;
    val(elements);
    var query=`EXEC GetGroupsByTypeId @TypeId=${(elements.typeId)}`;
    var sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result.recordset);
    return result.recordset;
}

const GetGroupByGroupId = async (elements)=>
{
    var result;
    val(elements);
    var query=`EXEC GetGroupsByGroupId @GroupId=${(elements.groupId)}`;
    var sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result.recordset);
    return result.recordset;
}

module.exports={GetGroupsByUserName, GetAllGroups, GetGroupsByTypeId, GetGroupByGroupId};
