// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
function high(x)
{
    function toValue(char)
    {
      let result = char.split('');
      for(let i = 0;i<char.length;i++)
      {
        result[i] = char.charCodeAt(i)-96
      }
      return result.reduce((a,b)=>a+b)
    }
    let a = x.split(' ');
    let b = a.map(toValue)
    let c = b.indexOf(Math.max(...b))
    return a[c]
  }