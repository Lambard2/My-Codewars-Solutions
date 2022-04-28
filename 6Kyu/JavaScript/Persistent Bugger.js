// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
function persistence(num)
{
    let a = num.toString().split('')
    let b = a.map(v => parseInt(v))
    let result = 1
    if(b.length == 1)
    {
      return 0
    }
    for(let i = 0;i<b.length;i++)
    {
      result*=b[i]
    }
    return persistence(result)+1
 }