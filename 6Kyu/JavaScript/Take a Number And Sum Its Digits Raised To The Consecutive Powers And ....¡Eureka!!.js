// https://www.codewars.com/kata/5626b561280a42ecc50000d1
function sumDigPow(a, b)
{
    var result = [];
    while(a <= b)
    {
      if(a.toString().split('').reduce((acc,cur,idx)=>acc + parseInt(cur) ** (idx + 1),0) == a)
        result.push(a);
      a++;
    }
    return result;
    
  }