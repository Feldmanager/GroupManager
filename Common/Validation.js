const Validatior=(elements)=>
{
    for (var key in elements){
        var value = elements[key];
        var invalidChars = value.match(/[^A-Za-z0-9\u0590-\u05FF ]/g);
                if(value==''||value=='undenfined')
            throw new Error('undefined object')
        else{
            if(invalidChars)
                throw new Error('The following characters are invalid: ' + invalidChars.join(' '))
        }
      }
}

module.exports=Validatior;
