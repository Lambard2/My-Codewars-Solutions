// https://www.codewars.com/kata/52449b062fb80683ec000024
function generateHashtag (str) 
{
    let arr = str.split(' ')
    let result = []
    for(let val of arr)
    {
      val = val.charAt(0).toUpperCase()+val.substr(1)
      result.push(val)
    }
    
    result.unshift('#')
    let ans = result.join('')
    
    if(str.trim() === '' || ans.length > 140)
    {
      return false
    }
    else
    {
     return ans
    }
  }