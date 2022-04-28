// https://www.codewars.com/kata/5848565e273af816fb000449
const encryptThis = function(text)
{
    if(text.length === 1)
    {
      return text.charCodeAt(0).toString()
    }
    let a
    let b
    let c
    let d
    return text.split(' ').map(v =>
    {
      a = v.charCodeAt(0).toString()
      b = v.substr(1,v.length-1)
      c = b.charAt(0)
      
      return a+b.replace(b.charAt(0),b.charAt(b.length-1)).slice(0,-1)+c
    }).join(' ') 
  }