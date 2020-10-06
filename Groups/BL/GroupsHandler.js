const val = require('../../Common/Validation')
const SqlHandler = require('../../DAL/SqlHandler');

const GetGroupsByUserName=async (elements)=>
{
    var result;
    val(elements);
    var query = `EXEC GetGroupsByUserName @UserName='${(elements.userName).toString()}'`;
    var sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    return result.recordset;
}

module.exports=GetGroupsByUserName;
