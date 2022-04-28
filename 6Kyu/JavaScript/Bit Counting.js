// https://www.codewars.com/kata/526571aae218b8ee490006f4
var countBits = function(n)
{
    let a = n.toString(2)
    return a.split('').filter(x => x=1).reduce((a,b)=>a+ +b, 0)
};