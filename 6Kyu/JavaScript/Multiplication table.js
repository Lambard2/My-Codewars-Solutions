// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
multiplicationTable = function(size)
{
    let result = [];
    for(let i = 0;i<size;i++)
    {
      result.push([]);
      for(let j = 0;j<size;j++)
      {
        result[i].push((i+1)*(j+1))
      }
    }
    return result
  }