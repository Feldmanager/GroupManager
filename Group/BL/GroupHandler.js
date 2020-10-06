const val = require('../../Common/Validation')
const SqlHandler = require('../../DAL/SqlHandler');

const InsertGroup=async (elements)=>
{
    var result;
    val(elements);
    var query = `EXEC InsertGroup @TypeId=${parseInt(elements.TypeId)}, @GroupName='${(elements.GroupName).toString()}'`;
    var sqlExecute = new SqlHandler();
    result = await sqlExecute.Execute(query);
    console.log(result);
    return result;
}

module.exports=InsertGroup;
