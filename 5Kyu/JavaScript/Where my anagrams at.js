// https://www.codewars.com/kata/523a86aa4230ebb5420001e1
function anagrams(word, words)
{
    let letters = new Set(word)
    let comp = words.map((v,i,arr)=>
    {
      return new Set(v)
    })
    let result = []
    let areSetsEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value))
    for(let i = 0;i<words.length;i++)
    {
      if(areSetsEqual(letters, comp[i]) && word.length == words[i].length)
      {
        result.push(words[i])
      }
    }
    return result
  }