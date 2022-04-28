// https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(string)
{
    let a = string.split(' ').map(v =>
    {
      return v.length >= 5 ? v.split('').reverse().join('') : v
    })
    return a.join(' ')
}