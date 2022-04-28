// https://www.codewars.com/kata/57fb44a12b53146fe1000136
function balance(left,right){
    let a = left.split('').map((v)=>
    {
      if(v=="?")
      {
        return 3
      }
      else if(v=="!")
      {
        return 2
      }
    }).reduce((a,b)=>a+b)
    
    let b = right.split('').map((v)=>
    {
      if(v=="?")
      {
        return 3
      }
      else if(v=="!")
      {
        return 2
      }
    }).reduce((a,b)=>a+b)
    
    if(a>b)
    {
      return "Left"
    }
    else if(a<b)
    {
      return "Right"
    }
    else if(a==b)
    {
      return "Balance"
    }
  }