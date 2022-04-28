// https://www.codewars.com/kata/58d76854024c72c3e20000de
function reverse(str){
    let a = str.split(' ')
    let b = a.map(function(v,i)
    { 
        if(i%2==1)
        { 
            return v.split('').reverse().join('')
        }
        else return v
    })
    
    return b.join(' ').trim()
  }