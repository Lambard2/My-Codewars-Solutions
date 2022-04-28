// https://www.codewars.com/kata/57814d79a56c88e3e0000786
function encrypt(text, n)
{
    if(!text || n<=0)
    {
      return text
    }
    let result = text
    let a
    let odd
    let even
    for(let i = 0;i<n;i++)
    {
    a = result.split('')
    odd = a.filter(function(v,i,a)
    {
        if(i%2==1)
        {
            return v
        }
    })
    even = a.filter(function(v,i,a)
    {
        if(i%2==0)
        {
            return v
        }
    })
    result = odd.concat(even).join('')
    }
    return result
  }
  
  function decrypt(encryptedText, n)
    {
    if(!encryptedText || n<=0)
    {
      return encryptedText
    }
    let point = encryptedText.length/2
    let first = encryptedText.split('').slice(point)
    let second = encryptedText.split('').slice(0,point)
    let arr = []
    for(let i = 0;i<encryptedText.length;i++)
    {
      if(i%2===i-1)
      {
        arr.push(second[i])
        arr.push(first[i])
      }
      else
      {
        arr.push(first[i])
        arr.push(second[i])
      }
    }
    return decrypt(arr.join(""),n-1)
  }