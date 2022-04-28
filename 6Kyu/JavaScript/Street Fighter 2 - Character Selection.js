// https://www.codewars.com/kata/5853213063adbd1b9b0000be
function streetFighterSelection(fighters, position, moves)
{
    let result = []
    for(let i = 0;i<moves.length;i++)
    {
      
      switch(moves[i])
      {
          case "up":
            if(position[0]==0)
            {
              result.push(fighters[position[0]][position[1]])
            }
            else if(position[0]==1)
            {
              position[0] = 0
              result.push(fighters[position[0]][position[1]])
            }
            break
          
          case "down":
            if(position[0]==0)
            {
              position[0] = 1
              result.push(fighters[position[0]][position[1]])
            
            }
            else if(position[0]==1)
            {
              result.push(fighters[position[0]][position[1]])
            }
            break
          
          case "left":
            if(position[1]==0)
            {
              position[1] = 5
              result.push(fighters[position[0]][position[1]])
            }
            else if(position[1]>=0)
            {
              position[1] -=1
              result.push(fighters[position[0]][position[1]])
            }
            break
          
          case "right":
            if(position[1]==5)
            {
              position[1] = 0
              result.push(fighters[position[0]][position[1]])
            }
            else if(position[1]>=0)
            {
              position[1] +=1
              result.push(fighters[position[0]][position[1]])
            }
            break
      }
    }
    return result
  }