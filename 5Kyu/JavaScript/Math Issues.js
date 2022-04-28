// https://www.codewars.com/kata/5267faf57526ea542e0007fb
Math.round = function(number)
{
    if(Number.isInteger(number))
    {
      return number
    }
    let a = number.toString()
    let b = a.split('.')
    b[1] = b[1].substr(0, 1)
    let c = b.map(v => parseInt(v))
    if(c[1]>=5)
    {
      c[0]+=1;
    }
    return c[0]
  }
  
  Math.ceil = function(number)
    {
    if(Number.isInteger(number))
    {
      return number
    }
    return parseInt(number)+1
  }
  
  Math.floor = function(number) 
  {
    return parseInt(number)
  }